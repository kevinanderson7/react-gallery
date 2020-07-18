import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.map((item) => (
          <div className="galleryDiv" key={item.id}>
            <img alt={item.description} src={item.path}></img>
            <button type="button">Love This!</button>
            <div className="likesDiv">{item.likes}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
