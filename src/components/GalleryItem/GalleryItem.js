import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              this.props.updateLikes(this.props.item.id);
            }}
            type="button"
          >
            Love It!
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(event) => {
              this.props.deleteGalleryItem(this.props.item.id);
            }}
            type="button"
          >
            Delete
          </Button>
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
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              this.props.updateLikes(this.props.item.id);
            }}
            type="button"
          >
            Love It!
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(event) => {
              this.props.deleteGalleryItem(this.props.item.id);
            }}
            type="button"
          >
            Delete
          </Button>
          <div className="likesDiv">{this.props.item.likes}</div>
        </div>
      );
    }
  }
}

export default GalleryItem;
