import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log('button clicked');
  };

  render() {
    if (this.state.clicked === true) {
      return (
        <div>
          <p onClick={this.handleClick} className="descriptionText">
            {this.props.item.description}
          </p>
          <button
            onClick={(event) => {
              this.props.updateLikes(this.props.item.id);
            }}
            type="button"
          >
            Love It!
          </button>
          <button
            onClick={(event) => {
              this.props.deleteGalleryItem(this.props.item.id);
            }}
            type="button"
          >
            Delete
          </button>
          <div className="likesDiv">{this.props.item.likes}</div>
        </div>
      );
    } else {
      return (
        <div>
          <img
            onClick={this.handleClick}
            alt={this.props.item.description}
            src={this.props.item.path}
          ></img>
          <button
            onClick={(event) => {
              this.props.updateLikes(this.props.item.id);
            }}
            type="button"
          >
            Love It!
          </button>
          <button
            onClick={(event) => {
              this.props.deleteGalleryItem(this.props.item.id);
            }}
            type="button"
          >
            Delete
          </button>
          <div className="likesDiv">{this.props.item.likes}</div>
        </div>
      );
    }
  }
}

export default GalleryItem;
