var Apple = <li> {'5 apple'} </li>;
var Banana = <li>{'2 banana'}</li>;
var GroceryList =
  <ul>
    { Apple }
    { Banana }
  </ul>;

ReactDOM.render(GroceryList, document.getElementById("app"));