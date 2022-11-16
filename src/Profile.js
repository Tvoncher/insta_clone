import { Button } from "@mui/material";
import "./Profile.css";
import "./Footer.js";

const Profile = ({ user }) => {
  return (
    <div>
      <Button
        onClick={() =>
          alert(`Sorry, ${user.displayName}, Im still working on this`)
        }
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="nope"
        />
      </Button>
    </div>
  );
};

export { Profile };
