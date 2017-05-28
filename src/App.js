import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    })
  }
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log (`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  handleLogout ()
  {
    firebase.auth().signOut()
    .then(result => console.log (`${result.user.email} ha salido de la aplicacion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  renderLoginButton () {
    // si el usuario esta logeado haga
    if (this.state.user) {
      return(
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Bienvenido {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      );
    }else {
      return(
      <button onClick={this.handleAuth}> Login con Google</button>
      );
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Practica React 3</h2>
        </div>
        <p className="App-intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;
