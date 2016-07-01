const React = require('react');

module.exports = React.createClass({
  upload: function(event){
    event.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error == null) {
          var url = images[0].thumbnail_url;
          this.props.addImage(url);
        }
    }.bind(this));
  },

  render: function() {
    return (
      <button onClick={this.upload}>Add Image</button>
    );
  }

});
