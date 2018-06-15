import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Главная</button>
        <button>Новости</button>
        <button>Матчи</button>
        <button>Клуб</button>
        <button>Команда</button>
        <button>История</button>
        <button>Аналитика</button>        
        <button>О сайте</button>
        <div>Статьи о клубе</div>
      </div>
    );
  }
}

export default App;
