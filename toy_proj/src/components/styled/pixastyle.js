import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.width};
  margin:auto;
`
export const ImageSearch = styled.form`
  padding: 30px;text-align:center;
  input {
    width:400px;height: 50px;
    box-sizing: border-box; outline:none; padding:0 20px;
    font-size:16px;
  }
  button {
    width:120px; height:50px; border:none; background:#000;
    color:#fff; vertical-align: top;
  }
`

export const ImageBox = styled.article`
  margin-bottom: 40px; box-shadow:5px 5px 10px #efefef; padding:15px 15px 35px;
  border:1px solid #efefef;
  img {width:100%}
  h2 {font-size:30px; color:hotpink; margin-bottom:20px; text-transform:uppercase;}
  ul {margin-bottom:25px;
    li {margin-bottom:5px;}
  }
  p {
    span{
      display:inline-block; padding:3px 20px; border-radius:15px; background: #efefef; margin-right:5px;
    }
  }
`