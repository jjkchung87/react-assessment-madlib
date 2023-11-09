import React from 'react';

const Madlib = ({story, inputtedWords, getNewMadlib}) => {

    function fillMadlib(newStory, newInputtedWords) {
        if (typeof newStory !== 'string' || typeof newInputtedWords !== 'object' || newInputtedWords === null) {
          // Handle invalid input gracefully, e.g., by returning an error message or the original story
          return 'Invalid input';
        }
      
        // Use a regular expression to find and replace placeholders
        return newStory.replace(/\[(\d+\w+)\]/g, (_, placeholder) => {
          const value = newInputtedWords[placeholder];
          return value !== undefined ? value : `[${placeholder}]`; // Replace with the value or keep the placeholder if not found
        });
      }
      
    
    const newStory = fillMadlib(story, inputtedWords)

    return(
        <div className="Madlib">
            <p>{newStory}</p>
            <button onClick={()=> {getNewMadlib()}}>New Madlib!</button>
        </div>
    )
}

export default Madlib;