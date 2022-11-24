import { Modal } from "@mui/material";
import { useState } from "react";
import "./Notifications.css";

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

      <img
        onClick={() => setOpen(true)}
        src="/images/icons/notifications.png"
        alt=""
      />
    </div>
  );
};

export { Notifications };
