import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.item.description} src={this.props.item.path}></img>
        <button type="button">Love This!</button>
        <div className="likesDiv">{this.props.item.likes}</div>
        {/* <div>{this.props.item}</div> */}
      </div>
    );
  }
}

export default GalleryItem;
