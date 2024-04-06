### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a javascript framework used to build web application front-ends
  - It's built based on functional components which helps with making modular code that's easy to organize and replicate
  - It leverages the concepts of state and props, which are essentially ways of passing to to and between components
  - Each component returns JSX which is HTML-like code with javascript scripts which is what the client renders


- What is Babel?
  - Babel is a Javascript compiler that converts ES 2015+ JS to browser compatible JS
  - 
- What is JSX?
  - JSX is html-like code that React returns which ultimately gets rendered on the client-side

- How is a Component created in React?
  - Components are declared usually as functions
  - You first need to import React to turn the function into a component
  - The function accepts props, which are essenntially arguments/data for the function
  - The function will have logic for things like if the props/states require pre-processing before being rendered, eventlistener functions for elements
  - The function will usually return JSX, which is essentially the html that the client side receives

- What are some difference between state and props?
  - Props are data that get passed into an instance of a component and it cannot change within that instance. It will get passed down from a parent component
  - State is data that's "stored" within a componnent and can change within that instance within that component depending on some logic that's set

- What does "downward data flow" refer to in React?
  - This refers to the notion that data generally gets passed down through props from higher-levels of a React project's design.
  - For example, a CardDeck component will dictate which card is drawn. The data of the drawn-card (ie. suit and value) gets passed down to a Card component which creates an instance of a Card with that suit and value
  - Data can be passed up through functions
  - Generally, if data gets used across multiple components, it should be held in state at a higher-level of the component architecture for to enable centralized storage and easier passing of that data to multiple components 

- What is a controlled component?
  - A controlled component is in the context of forms.
  - With a controlled component, the form input is controlled by state
  - When a form input is updated, the state is changed, and the value in the form reflects what's in state

- What is an uncontrolled component?
  - With an uncontrolled component, the form input is not controlled by React and behaves more like a traditional HTML form input, where the input itself inherently manages its own input

- What is the purpose of the `key` prop when rendering a list of components?
  - The key prop is a way for React to easily distinguish between multiple instances of a component

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - It is poor since if an array is mutated, the index of a particular component can change

- Describe useEffect.  What use cases is it used for in React components?
  - useEffect is a built-in hook within React that is used to manage when we want certain side effects to occur (e.g. retrieving data from API, starting a new timer)
  - Anytime that state changes on a component, the entire component is re-rendered, and all side-effects occur. Hoever if certain logic is run through useEffect, the side effects of this logic won't occur unless whatever triggered the re-render is included in the dependencies list
  - For example, if there's a function to start a timer in a component. You only want this timer to start when the component is first mounted, but not each time the component is re-rendered. So the function to start the timmer should be included in useEffect


  - What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - useRef is another hook that serves two purposes:
    - Unlike useState, changes to a useRef value does not trigger a re-render of the component. Whatever is stored in ref will persist across re-renders
    - Allows direct access to DOM elements. Useful for managing focus, selection, and animation

  - Use cases include:
    - Accessing a video DOM element so don't have to redefine it with every re-render
    - Assigning a timerId to it so that you can clearInterval even after component re-renders


- When would you use a ref? When wouldn't you use one?
  - You'd use ref when you want a value to persist across re-renders or if you want the change in the value to not trigger a re-render


- What is a custom hook in React? When would you want to write one?
  - Custom hooks are ways to make hooks perform certain custom actions and modularize them so they can be re-used easily
  - A use-case might be to 
    - create a custom hook for making API calls with Axios
    - toggle between on and off (true vs false) in state
    - Using localStorage to store state 


