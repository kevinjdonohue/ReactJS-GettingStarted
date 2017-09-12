# React.JS Getting Started

This is a repo of notes and code examples created while
taking the course React.js Getting Started from PluralSight.

## Module 1:  Introduction

* A library, not a framework.
* Used for building User Interfaces
* Web, Mobile, etc.
* What not How
* You write the description of UI and React takes care of the rendering
* "V" from MVC

### 3 IMPORTANT, KEY CONCEPTS

### 1. Components

* Like functions
* Reusable and composable
* Can manage a private state

### 2. Reactive updates

* React will react
* Take updates to the browser

### 3. Virtual view in memory

* Write HTML in JavaScript; instead of enhancing HTML (Angular)
* Virtual DOM
* Tree reconciliation

### REACT COMPONENTS

Two Types:

1. Function Components
1. Class Components

#### Function Components

* Simplist form of a React component
* Takes in Props and returns something that looks like "HTML" (DOM); JSX

Simple Example:

```js
const MyComponent = (props) => {
    return (
        <elementOrComponent ../>
    );
}
```

#### Class Components

* More full featured form of a React components
* Takes in Props and considers internal State and returns something that looks like "HTML" (DOM); JSX
* Can change their internal State (not state of others) not Props

Simple Example:

```js
const MyComponent extends React.Component {
    render() {
        return (
            <elementOrComponent ../>
        );
    }
}
```

#### KEY CONCEPTS:

* State - can be changed; mutable
* Props - cannot be changed; immutable

#### With and Without JSX

With JSX:

```js
class Hello extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>Getting Started</h1>
            </div>
        );
    }
}

ReactDOM.render("<Hello />, mountNode);
```

Without JSX:

```js
class Hello extends React.Component {
    render() {
        return(
            React.createElement("div",
                { className: "container"},
                React.createElement("h1", null, "Getting Started")
            )
        );
    }
}

ReactDOM.render(React.createElement(Hello, null), mountNode);
```

Simple Example - Created Using [jsComplete REPL](http://jscomplete.com/repl)

```js
/*Class Component*/
class Button extends React.Component {
  handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
      return (
          <button onClick={this.handleClick}>
            +{this.props.incrementValue}
          </button>
    );
  }
}

/*Function Component*/
const Result = (props) => {
    return (
        <div>{props.counter}</div>
  );
};

/*Class Component*/
class App extends React.Component {

  /*Alternative to using full ctor, just set class property*/
  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    /*Uses prevState instead of just updating state to avoid race cond*/
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
    }));
  }

  render() {
      return (
          <div>
            <Button incrementValue={1} onClickFunction={this.incrementCounter} />
            <Button incrementValue={5} onClickFunction={this.incrementCounter} />
            <Button incrementValue={10} onClickFunction={this.incrementCounter} />
            <Button incrementValue={100} onClickFunction={this.incrementCounter} />
            <Result counter={this.state.counter} />
        </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

## Working with Data

## Building the Game Interface

## Numbers Selection

## Game State