import React, { Component } from 'react';
import './App.css';

export default class AppDragDropDemo extends Component {
  state = {
    items: [
      { name: "item1", category: "uncomplete", bgcolor: "yellow" },
      { name: "item2", category: "uncomplete", bgcolor: "pink" },
      { name: "item3", category: "complete", bgcolor: "skyblue" }
    ]
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let items = this.state.items.filter((item) => {
      if (item.name === id) {
        item.category = cat;
      }
      return item;
    });

    this.setState({
      ...this.state,
      items
    });
  }
  reset = () => {
this.render()
}
  render() {
    var items = {
      uncomplete: [],
      complete: []
    }

    this.state.items.forEach((i) => {
      items[i.category].push(
        <div key={i.name}
          onDragStart={(e) => this.onDragStart(e, i.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: i.bgcolor }}
        >
          {i.name}
        </div>
      );
    });

    return (
      <div className="container-drag">

        <div className="uncomplete"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "uncomplete") }}>
          <span className="item-header">uncomplete</span>
          {items.uncomplete}
        </div>
        <div className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}>
          <span className="item-header">complete</span>
          {items.complete}
        </div>


      </div>
    );
  }
}