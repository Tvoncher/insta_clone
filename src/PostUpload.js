import { Button, Modal } from "@mui/material";
import { useState } from "react";
import "./PostUpload.css";
import { storage, db } from "./firebase";
import { serverTimestamp } from "firebase/firestore";
const reduce = require("image-blob-reduce")();

const PostUpload = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [postMessage, setPostMessage] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (loading) return;
    setLoading(true);

    reduce.toBlob(img, { max: 750 }).then((blob) => {
      const uploadTask = storage.ref(`images/${img.name}`).put(blob);
      uploadTask.on("component_loaded", (snapshot) => {
        storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: serverTimestamp(),
              post__text: postMessage,
              post__img: url,
              post__avatar: url,
              username: user.displayName,
            });
            setOpen(false);
            setImg(null);
            setPostMessage("");
            setLoading(false);
          });
      });
    });
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="postUploadDiv">
          <div className="postUploadDiv__header">
            <Button
              className="postUploadDiv__header__button"
              onClick={() => setOpen(false)}
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png"
                alt=""
              />
            </Button>
            <h2>New post</h2>
            <Button
              className="postUploadDiv__header__button"
              onClick={() => alert("currently not supported")}
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-interface-colorful/48/arrow_right-512.png"
                alt="something wrong"
              />
            </Button>
          </div>
          <div className="postUploadDivBody">
            <form>
              <input
                type="text"
                placeholder="Enter your message"
                value={postMessage}
                onChange={(e) => setPostMessage(e.target.value)}
              />
              <input type="file" onChange={handleChange} />

              <Button
                disabled={!img}
                variant="contained"
                onClick={handleUpload}
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </Modal>

      <img
        onClick={() => setOpen(true)}
        src="/images/icons/post.png"
        alt="something went wrong"
      />
    </div>
  );
};

export { PostUpload };
