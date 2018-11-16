from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy #comunicacao com o banco

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ueasistemas:11235813@localhost/uea_sistemas'
db = SQLAlchemy(app)
from models import *

@app.route('/alunos/<int:aluno_id>')
def aluno(aluno_id):
    aluno = Aluno.query.filter_by(aluno_id = str(aluno_id)).first()
    if(aluno == None):
        return 'Usuário não encontrado!'
    return 'Aluno: %s' % aluno.aluno_nome

@app.route('/alunos')
def all_alunos():
    alunos = Aluno.query.all()

    output = []
    for aluno in alunos:
        a = {'Nome': aluno.aluno_nome}

        output.append(a)
    
    return jsonify(output)


if __name__ == '__main__':
    app.run(debug=1)
    