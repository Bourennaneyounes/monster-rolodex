import React , { Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
       monsters : [],
       searchField : ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({ monsters : users}))
  };

  handlechange = (e) => {
    this.setState({searchField : e.target.value})
  }
  render(){
    const { monsters , searchField} = this.state;
    const filtredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (

      <div className="App">
        <h1>Monster rolodex</h1>
        <SearchBox
        placeholder="search monster" 
        handlechange={ this.handlechange}/>
        <CardList monsters={filtredMonsters}/>
       
      </div>
    );
  }
}



export default App;
