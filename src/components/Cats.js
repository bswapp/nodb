import React, { Component } from "react";
import axios from "axios";
import "./cats.css";

class Cats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: "",
      age: 0,
      description: "",
      image: ""
    };
  }

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  handleEdit = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleUpdateCat = catId => {
    let updatedCat = {
      name: this.state.name,
      age: this.state.age,
      description: this.state.description,
      image: this.state.image
    };

    axios.put("/api/cuteCats", { id: catId, updatedCat: updatedCat });
  };

  render() {
    console.log(this.props.catsInfo.id);
    return (
      <div className="catHolder">
        {this.state.editing ? (
          <div>
            <input
              name="name"
              placeholder="new name"
              onChange={e => this.handleEdit(e)}
            />
            <input
              name="age"
              placeholder="new age"
              onChange={e => this.handleEdit(e)}
            />
            <input
              name="description"
              placeholder="new description"
              onChange={e => this.handleEdit(e)}
            />
            <input
              name="image"
              placeholder="new image"
              onChange={e => this.handleEdit(e)}
            />
          </div>
        ) : (
          <div>
            <div className="catName">{this.props.catsInfo.name}</div>
            <div className="catAge">{this.props.catsInfo.age}</div>
            <div className="catDescription">
              {this.props.catsInfo.description}
            </div>
            <img className="catImage" src={this.props.catsInfo.image} />
          </div>
        )}

        <button
          className="editButtons"
          onClick={() => {
            this.handleToggleEdit();
          }}
        >
          Edit
        </button>
        <button
          className="editButtons"
          onClick={() => this.handleUpdateCat(this.props.catsInfo.id)}
        >
          Submit
        </button>
        <button
          className="editButtons"
          onClick={() => this.props.delete(this.props.catsInfo.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Cats;
