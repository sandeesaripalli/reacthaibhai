import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component{
  state = {
    persons:[
      {name: 'Anna ', age: 33},
      {name: 'Mahitha', age: 30},
      {name: 'Naveen', age: 33}
    ]
  }
  entoHandler = ()=>{
    this.setState({
      persons:[
        {name: 'Deep', age: 33},
        {name: 'Item', age: 30},
        {name: 'Gitcha', age: 33}
      ]
    })
  }
render(){
   
    
    return ( <div className="App">
          <h1>Anna is Here</h1>
          <button onClick={this.entoHandler}>Hello Boss</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}><span>Bolo Tarrara</span></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
            
        );
    }
  }

    export default App;