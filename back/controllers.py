from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy #comunicacao com o banco

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ueasistemas:11235813@localhost/uea_sistemas'
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
        return 'Olá %s' % aluno.aluno_nome
    print (auth)
    return 'login '


# @app.route('/alunos/<int:aluno_id>')
# def aluno(aluno_id):
#     aluno = Aluno.query.filter_by(aluno_id = str(aluno_id)).first()
#     if(aluno == None):
#         return 'Aluno não encontrada!'
#     return 'Nome: %s' % aluno.aluno_nome

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
    