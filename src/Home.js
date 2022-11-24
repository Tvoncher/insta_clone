const Home = () => {
  return (
    <div>
      <img
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        src="/images/icons/home.png"
        alt="home"
      />
    </div>
  );
};

export { Home };
