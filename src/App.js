import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ItemsList';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem:{
        text: '',
        key: ''
      }
    }
    //when trying to type the list item, I got an error that this is undefined
    //solution: bind 'this' to the constructor functions bc 'this' doesnt automatically point to the class.
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    //prevent button's default behavior of refreshing
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log("adding new item", newItem)
    if(newItem.text !== ""){
      //destructuring to add new items and clear input
      const addedItem = [...this.state.items, newItem]
      this.setState({
        items: addedItem,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
    
  }



  render() {
    return (
      
        <div className="App">
          <header>
          <form id="list-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter test"
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
              <button type="submit"> Add </button>
            </form>
          
          </header>
          
          <ListItems items={this.state.items}></ListItems>
      
        
        </div>
        //sending props to child component: items list. in order to display
        
        
      
      
    )
    console.log(this.state.items)

  }
}
export default App;
