import React from 'react';
import './App.css';


type AppProps = { message: string }
const App = ({ message }: AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Personal Info, {message}</h1>
      </header>
    </div>
  );
}

export default App;
