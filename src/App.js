import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';


class App extends Component {
  state={
      users:[
        {"userName":"Kirru"},
        {"userName":"GauravBro"},
        {"userName":"RituSh"},
        {"userName":"Jitender"},
        {"userName":"Richaa"}
      ]
  }

  userNameChangeHandler=(event)=>{
      this.setState({
        users:[
          {"userName":event.target.value},
          {"userName":event.target.value},
          {"userName":event.target.value},
          {"userName":event.target.value},
          {"userName":event.target.value}
        ]
      })
  }
  render() {
    const styles={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid black',
      padding:'8px',
      cursor:'pointer'
    }
    return (
      <div className="App">
        {/* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component ( the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state ( an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> */}

        {/* <Router>
          <Route exact path="/userInput" render={(props) => <UserInput {...props}  />}/>
          <Route exact path="/userOutput" render={(props) => <UserOutput {...props}  />}/>
        </Router> */}

        <UserOutput userName={this.state.users[1].userName}/>
        <UserOutput userName={this.state.users[2].userName}/>
        <UserOutput userName={this.state.users[3].userName}/>
        <UserOutput userName={this.state.users[4].userName}/>

        <UserInput 
         changed={this.userNameChangeHandler}
         userName={this.state.users[0].userName}
          />
      </div>
    );
  }
}

export default App;
