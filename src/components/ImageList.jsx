import React from 'react';
import ImageItem from './ImageItem';

const ImageList = props => {

  const images = props.images.map( ({urls, description, id}) =>
    <ImageItem src={urls.regular} alt={description} key={id}/>
  );

  return <div>{images}</div>;
};

export default ImageList;
