# React JS Overview

## React JS

- What is it
- Main features
- Cons
- Facts
- Showcase
- How it works
- Hands-on

### What is it

React is a UI library developed at Facebook.

The main goal is to build reusable UI components.

React's basic building blocks are called components.

A component is a finite-state machine (ideally)

It isn't a full-stack JS framework like Angular, or Ember.

React != Angular

You could think of React as the V in MVC. It doesn't provide any network fetching capability like jQuery or Angular

Declarative model

### Main features

- Virtual DOM
    - Selectively renders subtrees of nodes based upon state changes.
    - It does the least amount of DOM manipulation possible in order to keep your components up to date.
    - How this works
        - First, React runs a "diffing" algorithm, which identifies what has changed.
        - The second step is reconciliation, where it updates the DOM with the results of diff.
- Props and State
- One-way reactive data flow
- JSX (optional)
- ES6, ES7 and ES-the-next-one (optional)
- Lifecycle methods
    - componentWillMount: Invoked once, on both client & server before rendering occurs.
    - componentDidMount: Invoked once, only on the client, after rendering occurs.
    - shouldComponentUpdate: Return value determines whether component should update.
    - componentWillUnmount: Invoked prior to unmounting component.
- Forms handling, elements and events
- Functional programming
- Server-side rendering (Isomorphic apps)
- React Native
- Redux

### Cons

- Just the view. No network fetching, no models, no routing, no services.
- Tooling. Webpack, Babel, etc.

### Facts

- It is used at Facebook in production
- Instagram web client is written entirely in React
- Browser support
- Salary

### Showcase

### How it works

- Preview code
    - No JSX, No ES6
    - JSX, No ES6
    - JSX, ES6

### Hands-on

- Live code

### Source and Links

- https://facebook.github.io/react/index.html
- https://facebook.github.io/react/docs/why-react.html
- https://scotch.io/tutorials/learning-react-getting-started-and-concepts
- http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/
- http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/
- http://calendar.perfplanet.com/2013/diff/
- https://github.com/enaqx/awesome-react
- https://blog.risingstack.com/the-react-way-getting-started-tutorial/

- http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/
- http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
- https://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way
- http://buildwithreact.com/

- http://codeutopia.net/blog/2016/01/10/getting-started-with-react-the-easy-way/
- http://www.sitepoint.com/getting-started-react/
- http://www.sitepoint.com/getting-started-react-jsx/

- http://pieroit.github.io/machine-learning-open-course/#/
- http://scottcheng.github.io/d3js-101/#/title
- https://github.com/hakimel/reveal.js
