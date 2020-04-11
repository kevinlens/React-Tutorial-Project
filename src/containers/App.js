import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'




 
  class App extends Component {



    constructor(props){
      super(props);
      console.log('[App.js] constructor');
    }



//object which holds data
    state = {

      persons: [
        {id: 'asdgr', name: 'Max', age: 28},
        {id: 'asdrty', name: 'Manu', age: 29},
        {id: 'utf56', name: 'Stephanie', age: 26}
      ],

      otherState: 'some other value',
      showPersons: false

    }




    deletePersonHandler = (personIndex) =>{
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      })
    }




    static getDerivedStateFromProps(props,state){
      console.log('App.js getDerivedStateFromProps', props);
      return state;
    }

    // componentWillMount(){
    //   console.log('[App.js] componentWillMount');
    // }

    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true;
    }

    componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
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

      this.setState({persons: persons});

    }







    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
    }







      render() {

        console.log('[App.js] render');


        let persons = null;


        if(this.state.showPersons){
          persons = 
                <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }







        return (

          <div className={classes.App}>
            <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
            {persons}
          </div>

        );



      }
    }




    export default App;
