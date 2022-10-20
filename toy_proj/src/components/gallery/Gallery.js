import { useEffect, useState } from "react";
import axios from 'axios'
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";
import { Container } from "../styled/pixastyle";

const Gallery = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [text, setText] = useState('cat')



  useEffect(() => {
    const API_KEY = '22711558-83b2eb96089c3ecfd2d8638a8'
    const url = `https://pixabay.com/api/?key=${ API_KEY }&q=${text}&image_type=photo`
    axios.get(url)
    .then (res => {
      setData(res.data.hits)
      setLoading(false)
      setError('')
    })
    .catch(error => {
      setData([])
      setLoading(true)
      setError('api 주소를 확인하세요')
    })
  }, [text])
  const onSearch = (text) => {
    setText(text);
  }
  
  return (
    <Container width="1400px">
      <GallerySearch onSearch={onSearch}/>
      {
        loading && data.length === 0 && (<h1>No Images Found</h1>)
      }
      {
        data && !loading && <GalleryList data={data}/>
      }
    </Container>
  );
};

export default Gallery;