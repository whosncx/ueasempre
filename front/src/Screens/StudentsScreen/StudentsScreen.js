import React, {Component} from 'react';
import './StudentsScreen.css';

//App Components

//external components
import Global from '../../Components/global'
import user from '../../Assets/user.png';
import Header from '../../Components/Header/Header';

class StudentsScreen extends Component{
    alunos = []
    constructor(){
        super();
        this.state = {
            alunos: [],
            selected: ''
        } 
    }

    componentDidMount(){
        var request = {
            method: 'get'
        }
        fetch(Global.API_URL + '/alunos', request).then((response) => {
            response.json().then((data) => {
                // console.log(data)
                console.log(data.alunos)
                this.setState({alunos:data.alunos}) 
                // data.forEach(element => {
                //     console.log(element)
                //     this.alunos.push({nome:element['nome'], id:element['id']})
                // });
            });      
        }).catch((e) => {
            console.log(e);
            alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
        });
    }

    goPerfil(id){
        console.log(id)
        this.props.history.push(
            "/perfil/"+id
        );
      }
    
    
  render(){
     console.log(this.state.alunos)
    return(
      <div>
        <header>
          <Header active={1}></Header>
        </header>
        
        <section className='grid-studentsContainer'>
            {this.state.alunos.map(c => 
                <article className='grid-studentsItem'>
                    <a onClick={()=>this.goPerfil(c.id)} className='grid-studentsHref'>
                        <img className='grid-studentsImg' alt='aluno' src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()}/>
                        <p className='grid-studentsText'>{c.nome}</p>
                    </a>
                </article>
            )}
        </section>
      </div>    
    );
  } 
}

export default StudentsScreen;