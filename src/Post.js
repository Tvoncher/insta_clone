import { Avatar } from "@mui/material";
import { useState } from "react";
import "./Post.css";

const Post = ({ username, post__img, post__avatar, post__text, key }) => {
  const [liked, setLiked] = useState(false);
  const like = () => {
    liked ? setLiked(false) : setLiked(true);
  };

  return (
    <div className="Post">
      <div className="post__header" id="post_header">
        <Avatar alt="M" src={post__avatar} />
        <h3>{username}</h3>
      </div>
      <div className="post__body">
        <img
          className="post__bodyIMG"
          src={post__img}
          alt="something went wrong"
        />
      </div>
      <div className="post__footer">
        <div className="post__footerButtons">
          <div className="likeButton btn">
            {liked ? (
              <img
                onClick={like}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfKHgsH1IPk5obslC1qFnXIoLQA4tFxHIQzdAxBJS8I0r-DnWxi2OCD1YD-TXyjA7hs&usqp=CAU"
                alt="like"
              />
            ) : (
              <img
                onClick={like}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor63yulr-lYPsdbsQDsgnfBh6vbeyMzALDQ&usqp=CAU"
                alt="like"
              />
            )}
          </div>

          <div className="commentButton btn">
            <img
              src="https://www.pngitem.com/pimgs/m/21-212930_transparent-square-speech-bubble-png-transparent-instagram-comment.png"
              alt="comment"
            />
          </div>

          <div className="sendButton btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png"
              alt="send"
            />
          </div>
        </div>
        <h4>liked {username} and others</h4>
        <h4>
          <b>{username}</b> {post__text}
        </h4>
        <h5>Watch all comments</h5>
        <h4>
          <b>Nickname</b> some comments <br />
          <b>Username</b> Awesome <br /> <b>Nickname</b> impressive!
        </h4>
      </div>
    </div>
  );
};

export { Post };
