import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";
import Cats from "./components/Cats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [{}],
      name: "",
      age: 0,
      description: "",
      image: "",
      id: 4
    };
  }
  componentDidMount() {
    axios.get("/api/cuteCats").then(res => {
      this.setState({
        cats: res.data
      });
    });
  }

  delete = id => {
    axios.delete(`/api/cuteCats/${id}`).then(res => {
      this.setState({
        cats: res.data
      });
    });
  };

  addToList = () => {
    const addOn = {
      name: this.state.name,
      age: this.state.age,
      description: this.state.description,
      image: this.state.image,
      id: this.state.id
    };

    this.setState({
      id: this.state.id + 1
    });

    axios
      .post("/api/cuteCats", addOn)
      .then(res =>
        this.setState({
          cats: res.data,
          name: "",
          age: 0,
          description: "",
          image: ""
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="header">The Cat's Meow</div>

        <div className="mainImage"></div>
        <div className="slogan">
          "Time spent with cats is never wasted" - Sigmund Freud
        </div>
        <div className="addCat">
          <input
            placeholder="name"
            className="buttons"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="age"
            className="buttons"
            name="age"
            value={this.state.age}
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="description"
            className="buttons"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />

          <input
            placeholder="image"
            className="buttons"
            name="image"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />
          <button className="buttons" onClick={this.addToList}>
            Add Cat
          </button>
        </div>

        <div className="body">
          {this.state.cats.map(element => {
            return <Cats catsInfo={element} delete={this.delete} />;
          })}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
