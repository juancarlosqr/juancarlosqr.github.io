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

React is mainly a concept and a library just secondly

### Main features

- Virtual DOM
    - Selectively renders subtrees of nodes based upon state changes.
    - It does the least amount of DOM manipulation possible in order to keep your components up to date.
    - How this works
        - First, React runs a "diffing" algorithm, which identifies what has changed.
        - The second step is reconciliation, where it updates the DOM with the results of diff.
- One-way reactive data flow (Props and State)
- JSX
- Server-side rendering (Isomorphic apps)
- React Native
- ES6, ES7 and ES-the-next-one (optional)
- Lifecycle methods
    - componentWillMount: Invoked once, on both client & server before rendering occurs.
    - componentDidMount: Invoked once, only on the client, after rendering occurs.
    - shouldComponentUpdate: Return value determines whether component should update.
    - componentWillUnmount: Invoked prior to unmounting component.
- Forms handling, elements and events
- Functional programming
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

- [Share this...](http://www.sitepoint.com/getting-started-react-jsx/)
- https://facebook.github.io/react/docs/why-react.html
- http://calendar.perfplanet.com/2013/diff/
- https://auth0.com/blog/2015/11/20/face-off-virtual-dom-vs-incremental-dom-vs-glimmer/
- https://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way
- http://buildwithreact.com/article/optimizing-with-shouldcomponentupdate
- http://www.bennadel.com/blog/2904-shouldcomponentupdate-will-short-circuit-an-entire-subtree-of-components-in-reactjs.htm
- http://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode
- http://conferences.oreilly.com/fluent/fluent2014/public/schedule/detail/32395
- https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.v5zredahm
- https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.62osoirb5
- https://medium.com/@eluciano11/from-ember-to-react-5c2faa0e8d10#.gcirkyivo
- https://www.youtube.com/watch?v=VCSG3U1rGLo&feature=youtu.be
- Talks by Pete Hunt

#### More

- https://facebook.github.io/react/index.html
- https://facebook.github.io/react/docs/thinking-in-react.html
- https://scotch.io/tutorials/learning-react-getting-started-and-concepts
- http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/
- http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/
- https://github.com/enaqx/awesome-react
- https://blog.risingstack.com/the-react-way-getting-started-tutorial/
- http://busypeoples.github.io/post/react-component-lifecycle/
- http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/
- http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
- http://www.stanleycyang.com/tutorials/mastering-react-redux
- http://codeutopia.net/blog/2016/01/10/getting-started-with-react-the-easy-way/
- http://www.sitepoint.com/getting-started-react/
- http://buildwithreact.com/

#### Others

- http://pieroit.github.io/machine-learning-open-course/#/
- http://scottcheng.github.io/d3js-101/#/title
- https://github.com/hakimel/reveal.js
