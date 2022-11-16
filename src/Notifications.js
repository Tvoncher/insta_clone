import { Button, Modal } from "@mui/material";
import { useState } from "react";
import "./Notifications.css";
import "./Footer.js";

const Notifications = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="notifications__modalDiv">
          <h3>Look, {user.displayName}, so many people love you!</h3>
          <h3>Megan Fox liked all your posts</h3>
          <br />
          <h3>Elon Musk liked all your posts</h3>
          <br />
          <h3>Donald Trump liked all your posts</h3>
          <br />
        </div>
      </Modal>

      <Button onClick={() => setOpen(true)}>
        <img
          src="https://www.kindpng.com/picc/m/169-1694281_heart-symbol-computer-icons-heart-icon-instagram-png.png"
          alt=""
        />
      </Button>
    </div>
  );
};

export { Notifications };
