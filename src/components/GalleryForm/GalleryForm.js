import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class GalleryForm extends Component {
  state = {
    gallery: this.props.gallery,
    newGalleryImage: {
      path: '',
      description: '',
      likes: 0,
    },
  };

  changeImageField = (event, fieldKey) => {
    console.log('key: ', fieldKey);
    this.setState({
      newGalleryImage: {
        ...this.state.newGalleryImage,
        [fieldKey]: event.target.value,
      },
    });
  };

  submitImage = (event) => {
    event.preventDefault();
    this.props.postNewImage(this.state.newGalleryImage);
    this.setState(
      {
        gallery: [...this.state.gallery, this.state.newGalleryImage],
        newGalleryImage: {
          path: '',
          description: '',
        },
      },
      () => {
        console.log(this.state.gallery);
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitImage}>
          <TextField
            m={0}
            id="outlined-basic"
            label="Image URL"
            variant="outlined"
            type="text"
            onChange={(event) => this.changeImageField(event, 'path')}
            value={this.state.newGalleryImage.path}
          />

          <TextField
            m={0}
            id="outlined-basic"
            label="Image Description"
            variant="outlined"
            type="text"
            onChange={(event) => this.changeImageField(event, 'description')}
            value={this.state.newGalleryImage.description}
          />

          <Button type="submit" className="saveButton" variant="contained">
            Save Image
          </Button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
