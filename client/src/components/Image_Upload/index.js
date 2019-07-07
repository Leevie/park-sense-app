import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            image: this.state.image.concat(picture),
        });
        console.log(this.state.image);
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}
export default ImageUpload;