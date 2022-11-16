import "./App.css";
import { Post } from "./Post";
import { Modal, Button, Input } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "./firebase";
import { PostUpload } from "./PostUpload";
import { Home } from "./Home";
import { Search } from "./Search";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const postRef = useRef(null);
  let [counter, setCounter] = useState(2);

  //callback for intersectionObserver
  const callbackFunction = (entries) => {
    if (entries[0].isIntersecting) {
      setCounter((counter += 1));
    }
  };
  const observer = new IntersectionObserver(callbackFunction);
  //wathing postRef
  setTimeout(() => {
    observer.observe(postRef.current);
  }, 2000);

  //auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //snapshot for everytime new post added on db collection
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  function signUp(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: username });
      })
      .catch((err) => alert(err));
    setOpen(false);
  }

  return (
    <div className="App">
      <Modal
        className="modal__logIn"
        open={open}
        onClose={() => setOpen(false)}
      >
        <form className="form__logIn">
          <img
            className="app_modalImg"
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="nope"
          />
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>

          <Input
            type="text"
            placeholder="Email adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <Button variant="contained" type="submit" onClick={signUp}>
            Sign up and log in
          </Button>
        </form>
      </Modal>

      <div className="app__header">
        {
          <img
            className="app__headerIMG"
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="nope"
          />
        }
        {user ? (
          <Button className="button__signOut" onClick={() => auth.signOut()}>
            Log out
          </Button>
        ) : (
          <Button className="button_logIn" onClick={() => setOpen(true)}>
            Log in
          </Button>
        )}
        {user ? (
          <h3>Welcome {user.displayName}</h3>
        ) : (
          <h3>You need to log in</h3>
        )}
      </div>

      <div className="app__posts">
        {posts.slice(0, counter).map((post, i) => (
          <div className="posts__div" ref={postRef} key={i}>
            <Post
              id={post.id}
              username={post.username}
              post__avatar={post.post__avatar}
              post__img={post.post__img}
              post__text={post.post__text}
            />
          </div>
        ))}
      </div>
      <div className="app__footer">
        {user ? (
          <>
            <Home className="footer__homeButtonDiv" />
            <Search className="footer_searchButtonDiv" />
            <PostUpload className="footer__postUploadButtonDiv" user={user} />
            <Notifications className="footer__notificationsDiv" user={user} />
            <Profile className="footer__profileDiv" user={user} />
          </>
        ) : (
          <center>
            <h1>Sorry u need to login</h1>
          </center>
        )}
      </div>
    </div>
  );
}

export default App;
