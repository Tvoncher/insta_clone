import { Button, Modal } from "@mui/material";
import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="search__modalDiv">
          <h3>
            Nothing to find here. Currently you are the only user of this
            awesome app. What am I supposed to show you?
          </h3>
          <img src="https://i.imgflip.com/2ztqsn.jpg?a463272" alt="nope" />
          <Button variant="contained" onClick={() => setOpen(false)}>
            Ok,I'll wait
          </Button>
        </div>
      </Modal>

      <img
        onClick={() => setOpen(true)}
        src="/images/icons/search.png"
        alt="something wrong"
      />
    </div>
  );
};

export { Search };
