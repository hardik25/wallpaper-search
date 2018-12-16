import React from 'react';
import "./ListImages.css";
import ImageCard from "./ImageCard"

const ListImages = (props) => {

      const images = props.images.map((image) => {
        return <ImageCard image={image} key={image.id} />
      });
      return <div className="list-images">{ images }</div>;
}

export default ListImages;
