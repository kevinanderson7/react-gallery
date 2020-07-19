import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.map((item) => (
          <div className="galleryDiv" key={item.id}>
            <GalleryItem
              item={item}
              updateLikes={this.props.updateLikes}
              deleteGalleryItem={this.props.deleteGalleryItem}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
