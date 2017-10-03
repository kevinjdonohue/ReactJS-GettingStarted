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

## Module 2:  Working with Data

As an alternative to using jsComplete, as they did in the course, I decided to use `create-react-app` to bootstrap the creation of my getting-started-app.

### Installing Create React App & Generating getting-started-app

```bash
npm install -g create-react-app

create-react-app getting-started-app

cd gettting-started-ap

npm start
```

Within the `src` folder that is generated, there are couple key files created that I used to get started:

* App.js - Used as a container - an outer most component
* index.js - Used to house App and call `ReactDOM.render` on our App component

In addition to the provided files I created the following files while following along:

* card.js
* cardlist.js
* form.js

The course starts out by having you create the card component, with fake data, to ensure you can render a (single) card.

```js
const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="100" alt={props.name} src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
                <div style={{fontSize: '1.35em', fontWeight: 'bold'}}>
                    {props.name}
                </div>
                <div style={{fontSize: '1.25em'}}>
                    {props.company}
                </div>
            </div>
        </div>
    );
};
```

> Note:  In this example, anywhere there are `props` being referenced, we originally started out with hard coded data.

```js
<div style={{fontSize: '1.25em'}}>
    Some Company
</div>
```

Next, in order to display several cards, the course has you create a cardlist component and modify the card component to take in values (props)from the cardlist.  Again, in order to verify that you can display several cards, you are instructed to fake out the data.

```js
const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};
```

> Note:  Again, we started out just hard coding several different cards here to verify the cardlist would render properly.  Afterwards, once the card data was moved to the App component, we refactored the cardlist to leveral JavaScript's map function to create card components dynamically with the given card data.

> A point was made about how React prefers to have a unique identifier for a collection of components (In our case card components) - so we added a `key` attribute to each card dynamically, providing the id (unique identifier from the source data) for each one.

After verifying that you can render a set of cards, the course indicates that because we want to have control over the set of cards and because we'll eventually have a form to add new cards, we should move the cards into the state of a wrapping component - so that it is available to both the cardlist and (eventually) the form.  So, the card data becomes a collection at the App level - passed into the cardlist component, which in turn passes each card's data (via a map function) to a card component.

```js
class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
```

> Note: We started out with an App component that only dealt with the cardlist component and the cards collection (in state).  Later, after we created the form component (see below), we added the form component here as well as the addNewCard function to provide the desired behavior to the form.

Once the App, cardlist and card components were working together, we added an additional component, a form.  The form's job is to take in a Github username, request the user's data from the Github Users API, and assign the returned data ('card' data) to the card collection in the App component.  In order make a call to the Github Users API, we added a javascript library called [axios](https://github.com/mzabriskie/axios) to facilitate making the AJAX call.

```bash
npm install axios
```



```js
class Form extends Component {
    state = {userName: ''}

    handleSubmit = (event) => {
        event.preventDefault();        
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {               
                this.props.onSubmit(resp.data);
                this.setState({userName: ''});
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.userName} 
                onChange={(event) => this.setState({userName: event.target.value})} 
                placeholder="Github username" required />
                <button type="submit">Add card</button>
            </form>
        );
    }
}
```

## Module 3:  Building the Game Interface

## Module 4:  Numbers Selection

## Module 5:  Game State