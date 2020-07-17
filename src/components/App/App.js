import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
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

  render() {
    const displayGallery = this.state.gallery.map((item, index) => {
      return (
        <div key={item.id}>
          <img src={item.path}></img> {item.likes}
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        {displayGallery}
        {/* <GalleryList /> */}
        <GalleryItem />
        {/* <img src="images/goat_small.jpg" /> */}
      </div>
    );
  }
}

export default App;
