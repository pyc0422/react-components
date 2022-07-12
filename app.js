// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

// ReactDOM.render(<App /> , document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  };

  onListItemMouseMove() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    }
    return(
      <li style={style} onMouseOver={this.onListItemMouseMove.bind(this)}>{this.props.item}</li>
    );
  }
}
var ListItem = (props) => (
  <ul>
    {props.groceryListItem.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);


var GroceryList= () => (
  <ListItem groceryListItem={['apple','banana']}/>
);


ReactDOM.render(<GroceryList /> , document.getElementById("app"));