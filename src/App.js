import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';



const StyledButton = styled.button`

  background-color: ${props => props.alty ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: ${props=> props.alty ? 'salmon': 'lightgreen'};
    color:black;
  }
`;



  class App extends Component {

//object which holds data
    state = {

      persons: [
        {id: 'asdgr', name: 'Max', age: 28},
        {id: 'asdrty', name: 'Manu', age: 29},
        {id: 'utf56', name: 'Stephanie', age: 26}
      ],

      otherState: 'some other value',
      showsPersons: false

    }










    deletePersonHandler = (personIndex) =>{
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      })
    }

    nameChangedHandler = (event,id) =>{
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      
      const person = {
        ...this.state.persons[personIndex]
      }
     
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: person});


      this.setState({
        persons:[
          {name: 'Max', age: 28},
          {name: event.target.value, age: 29},
          {name: 'Stephanie', age: 26}
        ]
      })
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showsPersons;
      this.setState({
        showsPersons: !doesShow
      });
    }







      render() {




        const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
          ':hover':{
            backgroundColor:'lightgreen',
            color:'black'
          }
        };





        let persons = null;
        
        if(this.state.showsPersons){
          persons = (
            <div>
              {this.state.persons.map((person,index) => {
                  return <Person 
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event)=>this.nameChangedHandler(event, person.id)} />
              })}
            </div>

          );


          style.backgroundColor ='red';
          style[':hover'] = {
            backgroundColor: 'lightgreen',
            color:'black'
          }
        }


        const classes = [];
        if(this.state.persons.length <= 2){
          classes.push('red');
        }
        if (this.state.persons.length <= 1){
          classes.push('bold');
        }


        return (

          <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton alty={this.state.showsPersons} onClick={this.togglePersonsHandler}>
            Switch Name
          </StyledButton>

            {persons}
          </div>

        );






      }
    }




    export default App;
