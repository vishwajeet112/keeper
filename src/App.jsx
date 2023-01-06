import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea'
import Note from './Note'


function App() {
  const [notes, setnotes] = useState([]);

  function addNote(newNote) {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote]
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem,index) => {
          return(
              <Note
                key={1}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
              />
        );
        })}
        <Footer />
      </header>
    </div>
  );
}

export default App;
