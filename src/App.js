import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

  class App extends Component {
//object which holds data
    state = {
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showsPersons: false
    }

    deletePersonHandler = (personIndex) =>{
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      })
    }

    nameChangedHandler = (event) =>{
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
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

        let persons = null;
        
        if(this.state.showsPersons){
          persons = (
            <div>
              {this.state.persons.map((person,index) => {
                  return <Person 
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} />
              })}
            </div>

          );
        }

        return (
          <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button 
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
            {persons}
          </div>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
      }
    }

    export default App;
