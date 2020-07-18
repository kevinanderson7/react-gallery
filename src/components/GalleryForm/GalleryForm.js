import React, { Component } from 'react';

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
          <input
            type="text"
            placeholder="Image URL"
            onChange={(event) => this.changeImageField(event, 'path')}
            value={this.state.newGalleryImage.path}
          />
          <input
            type="text"
            placeholder="Image Description"
            onChange={(event) => this.changeImageField(event, 'description')}
            value={this.state.newGalleryImage.description}
          />
          <button>Save Image</button>
        </form>
      </div>
    );
  }
}

export default GalleryForm;
