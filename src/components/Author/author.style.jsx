import styled from "styled-components";

export const AuthorDetail = styled.section`

  .singlePost {
  flex: 9;


.singlePostWrapper {
  display: flex;
  margin:25px auto 25px 30px;
  padding: 20px;
  padding-right: 0;


.singlePostImg {
  width: 300px;
    height: 206px;
  border-radius: 35px;
  object-fit: cover;
}
.wrapper{
margin: auto 60px;

.singlePostTitle {
  text-align: center;
  margin: 10px;
  font-size: 28px;
  font-family: "Lora", sans-serif;
}

.singlePostEdit {
  float: right;
  font-size: 16px;
}

.singlePostIcon {
  margin-left: 10px;
  cursor: pointer;
}

.singlePostIcon:first-child {
  color: teal;
}
.singlePostIcon:last-child {
  color: tomato;
}

.singlePostInfo {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
}

.singlePostAuthor{
  margin-left: 5px;
}
.address{
  color: #666;
  font-size: 20px;
  line-height: 25px;
}

.singlePostDesc {
  color: #666;
  font-size: 20px;
  line-height: 25px;
}

/* .singlePostDesc::first-letter {
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
} */
}
}
}
  
`;