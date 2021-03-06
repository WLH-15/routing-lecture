import React from 'react';
import routes from './routes';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* routes are displayed here */}
      {routes}
    </div>
  );
}

export default App;
