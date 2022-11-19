import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Button>
        <img
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          src="https://www.pngitem.com/pimgs/m/17-176763_hone-icon-instagram-png-home-transparent-png.png"
          alt=""
        />
      </Button>
    </div>
  );
};

export { Home };
