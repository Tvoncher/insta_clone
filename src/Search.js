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
            Я все понял и осознал свою ошибку
          </Button>
        </div>
      </Modal>
      <Button onClick={() => setOpen(true)}>
        <img
          src="https://www.pngitem.com/pimgs/m/329-3297291_pc-website-magnifying-glass-ig-search-icon-png.png"
          alt="something wrong"
        />
      </Button>
    </div>
  );
};

export { Search };
