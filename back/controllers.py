import os
import jwt
import datetime
from flask_cors import CORS
from werkzeug.utils import secure_filename
from flask import Flask, jsonify, request, make_response, send_file, session
from functools import wraps
from flask_sqlalchemy import SQLAlchemy #comunicacao com o banco

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ueasistemas:11235813@localhost/uea_sistemas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
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
    
    db.session.commit()

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
            current_user = Aluno.query.filter_by(aluno_id=data['aluno_id']).first()
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
        
    output = {
        'nome': aluno.aluno_nome, 
        'email': aluno.aluno_email, 
        'facebook': aluno.aluno_facebook, 
        'linkedin': aluno.aluno_linkedin, 
        'cpf': aluno.aluno_id, 
        'curso': aluno.curso.curso_nome, 
        'unidade': aluno.unidade.unidade_nome, 
        'senha': aluno.aluno_senha,
        'ano_ingresso' : aluno.aluno_ano_ingresso, 
        'ano_conclusao' : aluno.aluno_ano_conclusao, 
        'discente_inst' : aluno.aluno_discente_instituicao,
        'discente_situacao' : aluno.aluno_discente_situacao, 
        'discente_funcao' : aluno.aluno_discente_funcao, 
        'egresso_inst' : aluno.aluno_egresso_instituicao,
        'egresso_situacao' : aluno.aluno_egresso_situacao, 
        'egresso_funcao' : aluno.aluno_egresso_funcao , 
        'situacao' : aluno.aluno_situacao}

    db.session.commit()
    return jsonify(output)
    

@app.route('/alunos/<int:qtd>')
def all_alunos(qtd):
    alunos= Aluno.query.order_by(Aluno.aluno_data_cadastro.desc()).all()
    if (qtd > 0):
        alunos= Aluno.query.order_by(Aluno.aluno_data_cadastro.desc()).limit(qtd).all()

    output = []
    for aluno in alunos:
        a_data = {'nome': aluno.aluno_nome, 'id': aluno.aluno_id}

        output.append(a_data)
        
    db.session.commit()
    response = make_response(jsonify({'alunos': output}))
    return response


@app.route('/perfilaluno', methods=['GET'])
@token_required
def perfilaluno(current_user):
        
    output = {
        'nome': current_user.aluno_nome, 
        'email': current_user.aluno_email, 
        'facebook': current_user.aluno_facebook, 
        'linkedin': current_user.aluno_linkedin, 
        'cpf': current_user.aluno_id, 
        'curso': current_user.curso.curso_id, 
        'unidade': current_user.unidade.unidade_id, 
        'senha': current_user.aluno_senha,
        'lattes': current_user.aluno_lattes,
        'whatsapp': current_user.aluno_whatsapp,
        'ano_ingresso' : current_user.aluno_ano_ingresso, 
        'ano_conclusao' : current_user.aluno_ano_conclusao, 
        'situacao' : current_user.aluno_situacao,
        'discente_inst' : current_user.aluno_discente_instituicao,
        'discente_situacao' : current_user.aluno_discente_situacao, 
        'discente_funcao' : current_user.aluno_discente_funcao, 
        'egresso_inst' : current_user.aluno_egresso_instituicao,
        'egresso_situacao' : current_user.aluno_egresso_situacao, 
        'egresso_funcao' : current_user.aluno_egresso_funcao 
    }

    db.session.commit()
    response = make_response(jsonify(output))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


# CADASTRO INCOMPLETO
@app.route('/cadastro', methods=['POST'])
def create_aluno():
    
    data = request.get_json()

    novo_aluno = Aluno(aluno_nome=data['name'],aluno_id=data['cpf'],aluno_facebook=data['facebook'],
    aluno_linkedin=data['linkedin'],aluno_email=data['email'],aluno_uea_unidade=data['unity'],aluno_uea_curso=data['course'],
    aluno_senha=data['password'], aluno_ano_ingresso=data['entryYear'], aluno_ano_conclusao=data['exitYear'],
    aluno_situacao=data['situation'],aluno_discente_situacao=data['discente_situation'], aluno_matricula='123',
    aluno_discente_funcao=data['discente_function'],aluno_discente_instituicao=data['discente_institutuion'],
    aluno_status=1, 
    aluno_egresso_situacao=data['egresso_situation'],aluno_egresso_instituicao=data['egresso_institutuion'], 
    aluno_egresso_funcao=data['egresso_function'], aluno_data_cadastro=datetime.datetime.utcnow(),
    aluno_lattes=data['lattes'],aluno_whatsapp=data['whatsapp'])

    db.session.add(novo_aluno)
    db.session.commit()
    response = make_response(jsonify({'message': 'Aluno Cadastrado!', 'id':novo_aluno.aluno_id}))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/cadastro', methods=['PUT'])
@token_required
def update_aluno(current_user):
    data = request.get_json()
    aluno = Aluno.query.filter_by(aluno_id=current_user.aluno_id).first()

    aluno.aluno_nome=data['name']
    aluno.aluno_facebook=data['facebook']
    aluno.aluno_linkedin=data['linkedin']
    aluno.aluno_email=data['email']
    aluno.aluno_uea_unidade=data['unity']
    aluno.aluno_uea_curso=data['course']
    aluno.aluno_senha=data['password']
    aluno.aluno_ano_ingresso=data['entryYear']
    aluno.aluno_ano_conclusao=data['exitYear']
    aluno.aluno_situacao=data['situation']
    aluno.aluno_matricula='123'
    aluno.aluno_discente_situacao=data['discente_situation']
    aluno.aluno_discente_funcao=data['discente_function']
    aluno.aluno_discente_instituicao=data['discente_institutuion']
    aluno.aluno_egresso_situacao=data['egresso_situation']
    aluno.aluno_egresso_funcao=data['egresso_function']
    aluno.aluno_egresso_instituicao=data['egresso_institutuion']
    aluno.aluno_lattes=data['lattes']
    aluno.aluno_whatsapp=data['whatsapp']
    aluno_status=1

    db.session.add(aluno)
    db.session.commit()

    response = make_response(jsonify({'message': 'Aluno Cadastrado!', 'id':aluno.aluno_id}))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response



@app.route('/unidades')
def all_unidades():
    unidades = Unidade.query.all()

    output = []
    for unidade in unidades:
        uni = {
            'nome': unidade.unidade_nome,
            'id': unidade.unidade_id,
            'sigla': unidade.unidade_sigla
        }

        output.append(uni)
    
    db.session.commit()
    return jsonify(output)

@app.route('/unidades/<int:unidade_id>')
def unidade(unidade_id):
    unidade = Unidade.query.filter_by(unidade_id = (unidade_id)).first()
    if(unidade == None):
        return 'Unidade não encontrada!'
        
    db.session.commit()
    return 'Nome: %s' % unidade.unidade_nome


@app.route('/cursos')
def all_cursos():
    cursos = Curso.query.all()
    output = []
    for curso in cursos:
        c_data = {
                    'nome': curso.curso_nome,
                    'sigla': curso.curso_sigla,
                    'id': curso.curso_id
                 }

        output.append(c_data)
    
    db.session.commit()
    return jsonify(output)

@app.route('/cursos/<int:unidade_id>')
def curso(unidade_id):
    cursos = Curso.query.filter_by(curso_unidade_id = str(unidade_id)).all()
    output = []
    for curso in cursos:
        c_data = {
                    'nome': curso.curso_nome,
                    'sigla': curso.curso_sigla,
                    'id': curso.curso_id
                 }

        output.append(c_data)
    
    db.session.commit()
    return jsonify(output)


@app.route('/upload', methods=['POST'])
def upload():
    target=os.path.join('imgs/uploads')
    if not os.path.isdir(target):
        os.mkdir(target)
    file = request.files['file']

    filename = request.form['filename']
    destination="/".join([target, filename])
    if os.path.isfile(destination):
        os.remove(destination)
    file.save(destination)
    session['uploadFilePath']=destination
    response = make_response(jsonify({'message': destination}))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static')

@app.route('/imgs/uploads/<path>', methods=['GET'])
def serve_file_in_dir(path):
    return send_file('imgs/uploads/' + path)



if __name__ == '__main__':
    app.run(debug=1)
    