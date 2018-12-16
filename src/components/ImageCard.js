import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { spans : 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const numSpans = Math.ceil(height/10) + 1;
    console.log(numSpans);
    this.setState({ spans: numSpans });
  }

  render () {
    return (
      <div style={{ align: 'center', gridRowEnd: `span ${this.state.spans}` }}>
        <img
            alt={this.props.image.description}
            src={this.props.image.urls.regular}
            ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;
