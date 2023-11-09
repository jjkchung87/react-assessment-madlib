import React, {useState} from 'react'
import {Formik} from 'formik';

const MadlibForm = ({wordTypeObject, updatedWordTypeObject}) => {
                                                    
    const [formData, setFormData] = useState(wordTypeObject)
    const [showError, setShowError] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target
        
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //check to see if all input fields are filled

        for (let input in formData) {
            if (formData[input] === "") {
                setShowError(true)
                return
            }
        }

        setShowError(false)
        updatedWordTypeObject(formData)

    }


    let inputTemplate = []

    for (let input in formData) {
        let placeholder = input.slice(1);
        let newInput = (
          <input
            name={input} // Use curly braces for interpolation
            type="text"
            placeholder={placeholder}
            value={formData[input]}
            onChange={handleChange}
            key={input} // Add a unique key to each input element
          />
        );
    
        inputTemplate.push(newInput);
      }


    return (        
        <>
            <form className="MadlibForm" onSubmit={handleSubmit}>
            {inputTemplate}
            <button>Submit</button>
        </form>
        
        {showError && <p >Please fill out all fields</p>}
        </>
    )
}

export default MadlibForm

/*

{
    key:
    name:
}


[
    {
        id:
        wordType: noun,
        value:
    }
]

*/