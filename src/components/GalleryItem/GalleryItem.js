import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
          <Box boxShadow={5} m={0}>
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
            <Typography variant="h6" className="likesDiv">
              {this.props.item.likes}
            </Typography>
          </Box>
        </div>
      );
    } else {
      return (
        <div>
          <Box boxShadow={5} m={0}>
            <img
              onClick={this.handleClick}
              alt={this.props.item.description}
              src={this.props.item.path}
            ></img>
          </Box>
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
          <Typography variant="h6" className="likesDiv">
            {this.props.item.likes}
          </Typography>
        </div>
      );
    }
  }
}

export default GalleryItem;
