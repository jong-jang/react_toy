import React from 'react';
import { ImageBox } from "../styled/pixastyle";

const GalleryItem = ({item}) => {
  const {user,views,downloads,likes,webformatURL, tags} = item
  const tagList = tags.split(', ');
  return (
    <ImageBox>
      <img src={webformatURL} alt=""/>
      <h2>{user}</h2>
      <ul>
        <li>조회수:{views}</li>
        <li>다운로드:{downloads}</li>
        <li>좋아요:{likes}</li>
      </ul>
      <p>
        {
          tagList.map(item => <span key={item}>#{item} </span>)
        }
      </p>
    </ImageBox>
  );
};

export default GalleryItem;