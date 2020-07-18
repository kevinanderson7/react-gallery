import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: true,
    });
    console.log('button clicked');
  };

  render() {
    if (this.state.clicked === true) {
      return (
        <div>
          <p className="descriptionText">{this.props.item.description}</p>
          <button onClick={this.handleClick} type="button">
            Love This!
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
          <button type="button">Love This</button>
          <div className="likesDiv">{this.props.item.likes}</div>
        </div>
      );
    }
  }
}

export default GalleryItem;
