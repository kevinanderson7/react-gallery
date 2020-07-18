import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';

class App extends Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    console.log('READY');
    this.getGallery();
  }

  getGallery() {
    Axios({
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
    Axios({
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        {/* {displayGallery} */}
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
