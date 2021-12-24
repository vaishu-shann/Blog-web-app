import styled from "styled-components";

export const InputField = styled.section`
  .ant-input{
     height: 50px;
      width: 75%;
      margin:100px 20px 50px;
  }  
  .ant-btn{
    height: 50px;
    width: 200px;
  }
`;

export const AllBlogs = styled.section`

display: flex;
    flex-wrap: wrap;
justify-content:space-around;
.all-post{
  .post {
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;


.postImg {
  width: 385px;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
}

.postInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:10px;
}

.postCat {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #be9656;
  line-height: 19px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.postTitle {
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
}

.postDate {
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  margin-top: 15px;
}

.postDesc {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
} 
}
`;