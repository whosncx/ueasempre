import jwt
import datetime
from flask_cors import CORS
from flask import Flask, jsonify, request, make_response
from flask_sqlalchemy import SQLAlchemy #comunicacao com o banco

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ueasistemas:11235813@localhost/uea_sistemas'
CORS(app)
db = SQLAlchemy(app)
from models import *

@app.route('/login')
def login():
    auth = request.authorization
    erro = None

    if ((not auth) or (not auth.username) or (not auth.password)):
        erro = 'Login required.'

    aluno = Aluno.query.filter_by(aluno_id = auth.username).first()
    
    if (not aluno):
        erro = 'CPF não cadastrado no sistema.'
    
    elif (not (aluno.aluno_senha == auth.password)):
        erro = 'Senha Incorreta'

    if (erro is None):

        token = jwt.encode({'aluno_id': aluno.aluno_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, 'sempreuea')
        response = make_response(jsonify({'token': token.decode('UTF-8'), 'canLogin':True}))
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

    response = make_response(jsonify({'erro':erro}), 401)
    response.headers['WWW-Authenticate'] = 'Basic realm={}'.format(erro)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            response = make_response(jsonify({'message': 'Token is missing!'}), 401)
            response.headers['Access-Control-Allow-Origin'] = '*'
            return response

        try:
            data = jwt.decode(token, 'sempreuea')
            current_user = Pesq.query.filter_by(aluno_id=data['aluno_id']).first()
        except:
            response = make_response(jsonify({'message': 'Token is missing!'}), 401)
            response.headers['Access-Control-Allow-Origin'] = '*'
            return response

        return f(current_user, *args, **kwargs)

    return decorated



@app.route('/alunos/<string:aluno_id>')
def aluno(aluno_id):
    aluno = Aluno.query.filter_by(aluno_id = (aluno_id)).first()
    if(aluno == None):
        return 'Usuário não encontrado!'
        
    output = {'nome': aluno.aluno_nome, 'email': aluno.aluno_email, 'facebook': aluno.aluno_facebook, 'linkedin': aluno.aluno_linkedin, 
        'cpf': aluno.aluno_id, 'curso': aluno.curso.curso_nome, 'unidade': aluno.unidade.unidade_nome, 'senha': aluno.aluno_senha,
        'ano-ingresso' : aluno.aluno_ano_ingresso, 'ano-conclusao' : aluno.aluno_ano_conclusao, 'discente-inst' : aluno.aluno_discente_instituicao,
        'discente-situacao' : aluno.aluno_discente_situacao, 'discente-funcao' : aluno.aluno_discente_funcao, 'egresso-inst' : aluno.aluno_egresso_instituicao,
        'egresso-situacao' : aluno.aluno_egresso_situacao, 'egresso-funcao' : aluno.aluno_egresso_funcao }

    return jsonify(output)
    

@app.route('/alunos')
def all_alunos():
    alunos= Aluno.query.all()

    output = []
    for aluno in alunos:
        a_data = {'nome': aluno.aluno_nome, 'curso': aluno.curso.curso_nome}

        output.append(a_data)
    
    return jsonify(output)

# CADASTRO INCOMPLETO
# @app.route('/cadastro', methods=['POST'])
# def create_aluno():
#     data = request.get_json()

#     novo_aluno = aluno(aluno_nome=data['name'],aluno_id=data['cpf'],aluno_facebook=data['facebook'],
#     aluno_linkedin=data['linkedin'],aluno_email=['email'],aluno_uea_unidade=data['unity'],aluno_uea_curso=data['course'],
#     aluno_senha=data['password'], aluno_ano_ingresso=data['entryYear'], aluno_ano_conclusao=data[exitYear]
#     aluno_situacao=0,aluno_discente_situacao=0,)

#     db.session.add(lab)
#     db.session.commit()

#     response = make_response(jsonify({'message': 'Lab created!', 'id':lab.lab_id}))
#     response.headers['Access-Control-Allow-Origin'] = '*'
#     return response



@app.route('/unidades')
def all_unidades():
    unidades = Unidade.query.all()

    output = []
    for unidade in unidades:
        uni = {'Nome': unidade.unidade_nome}

        output.append(uni)
    
    return jsonify(output)

@app.route('/unidades/<int:unidade_id>')
def unidade(unidade_id):
    unidade = Unidade.query.filter_by(unidade_id = (unidade_id)).first()
    if(unidade == None):
        return 'Unidade não encontrada!'
    return 'Nome: %s' % unidade.unidade_nome


@app.route('/cursos')
def all_cursos():
    cursos = Curso.query.all()
    output = []
    for curso in cursos:
        c_data = {'Nome': curso.curso_nome, 'Unidade': curso.curso_nome}

        output.append(c_data)
    
    return jsonify(output)

@app.route('/cursos/<int:curso_id>')
def curso(curso_id):
    curso = Curso.query.filter_by(curso_id = str(curso_id)).first()
    if(curso == None):
        return 'Curso não encontrado!'
        
    return 'Nome: %s' % curso.curso_nome

if __name__ == '__main__':
    app.run(debug=1)
    