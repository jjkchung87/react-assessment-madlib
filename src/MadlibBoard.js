import React, { useState, useEffect } from 'react';
import madlibObjects from './madlibObjects';
import Madlib from './Madlib'; 
import MadlibForm from './MadlibForm';

const MadlibBoard = () => {
  const [madlib, setMadlib] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showMadlib, setShowMadlib] = useState(false);
  
  // Function to generate a new Madlib
  function getNewMadlib() {
   
    const generateNewMadlib = () => {
        const index = Math.floor(Math.random() * madlibObjects.length);
        const selectedMadlib = madlibObjects[index];
        return selectedMadlib;
    }
    const newMadlib = generateNewMadlib();
    setMadlib(newMadlib);
    setShowForm(true);
    setShowMadlib(false)
  }

  // Function to handle form submission and update inputtedWords
  function handleFormSubmit(updatedInputtedWords) {
    const updateInputtedWords = (inputtedWords) => {
        setMadlib(
            {
                ...madlib,
                inputWordTypes: inputtedWords
                }
        )
        }

    updateInputtedWords(updatedInputtedWords);
    setShowForm(false);
    setShowMadlib(true);
  }

  useEffect(() => {
    getNewMadlib();
  }, []); 


  return (
    <div className="MadlibBoard">
      <h1>Madlibs</h1>
      {showMadlib && (
        <Madlib
          story={madlib.story}
          inputtedWords={madlib.inputWordTypes} 
          getNewMadlib={getNewMadlib}
        />
      )}
      {showForm && (
        <MadlibForm
          wordTypeObject={madlib.inputWordTypes} 
          updatedWordTypeObject={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default MadlibBoard;
