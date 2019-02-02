import React, { Component } from 'react';
import './App.css';
import List from './List';
import store from './store'

function App () {
  console.log(store);
  const lists = store.lists.map((i,k)=>
    <List 
      key={k}
      header={i.header}
      cards={i.cardIds.map(id=>store.allCards[id])
      }
    />
  )

  return(
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  )
}

export default App;
