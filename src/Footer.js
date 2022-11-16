import "./Footer.css";
import { PostUpload } from "./PostUpload";
import { Home } from "./Home";
import { Search } from "./Search";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import "./App.js";

const Footer = ({ user }) => {
  return (
    <div className="footer">
      <Home className="footer__homeButtonDiv" />

      <Search className="footer_searchButtonDiv" />

      <PostUpload className="footer__postUploadButtonDiv" user={user} />

      <Notifications className="footer__notificationsDiv" user={user} />

      <Profile className="footer__profileDiv" user={user} />
    </div>
  );
};

export { Footer };
