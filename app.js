
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </ul>
);

var GroceryList= () => (
  <div>
    <GroceryListItem groceryItems={['3 apple', '4 banana']}/>
  </div>

);


ReactDOM.render(<GroceryList /> , document.getElementById("app"));