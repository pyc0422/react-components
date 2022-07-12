class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemMouseMove() {
    this.setState({
      done: !this.state.done
    });
  }


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }
    return(
      <li style={style} onMouseEnter={this.onListItemMouseMove.bind(this)} onMouseLeave={this.onListItemMouseMove.bind(this)}>{this.props.item}</li>
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