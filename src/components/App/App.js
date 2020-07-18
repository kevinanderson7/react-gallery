import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    console.log('READY');
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log('response', response.data);
        this.setState({
          gallery: response.data,
        });
      })
      .catch((error) => {
        console.log('error during get', error);
      });
  }

  updateLikes = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((error) => {
        console.log('error during PUT', error);
      });
  };

  postNewImage = (imageData) => {
    console.log('in postNewImage:', imageData);
    axios({
      method: 'POST',
      url: '/gallery',
      data: imageData,
    })
      .then((response) => {
        console.log('POST response:', response);
        this.getGallery();
      })
      .catch((error) => {
        console.log('error with POST', error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        <GalleryForm
          postNewImage={this.postNewImage}
          gallery={this.state.gallery}
        />
        <GalleryList
          gallery={this.state.gallery}
          updateLikes={this.updateLikes}
        />

        {/* <img src="images/goat_small.jpg" /> */}
      </div>
    );
  }
}

export default App;
