import React, { useState } from 'react';
import { ImageSearch } from "../styled/pixastyle";

const GallerySearch = ({onSearch}) => {
  const [text, setText] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    if(!text) return
    onSearch(text)
  }
  
  return (
    <ImageSearch onSubmit={onSubmit}>
      <input type="text" placeholder='검색어를 입력하세요' value={text} onChange={e => setText(e.target.value)}/>
      <button type="submit">검색</button>
    </ImageSearch>
  );
};

export default GallerySearch;