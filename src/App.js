import React from 'react';
import './App.css';
import List from '../src/components/List';
import { GitReposFeed } from "../src/components/GitReposFeed";
function App() {
  return (
    <div className="App">
        <GitReposFeed />
    </div>
  );
}

export default App;
