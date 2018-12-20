import React, { Component } from 'react';

export default class App extends Component {
    state = {
      items: [{name:"item1",
               category:"uncomplete",
               bgcolor: "red"},

              {name:"item2",
               category:"complete",
               bgcolor:"green"},

              {name:"item3",
               category:"complete",
               bgcolor:"blue"}
        ]}
  render() {
    const items = {
      uncomplete: [],
      complete: []
    }
    this.state.items.forEach((i) => {
      items[i.category].push(
      <div key = {i.name}
        onDragStart ={(e) => this.onDragStart(e, i.name)}
    draggable
    className = 'draggable'
    style={{backgroundColor: i.bgcolor}}>{i.name}
    </div>)
  })
    return (
      <div className="container">

      </div>
    );
  }
}
