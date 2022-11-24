import "./Profile.css";

const Profile = ({ user }) => {
  return (
    <div>
      <img
        onClick={() =>
          alert(`Sorry, ${user.displayName}, Im still working on this`)
        }
        src="/images/icons/profile.png"
        alt="nope"
      />
    </div>
  );
};

export { Profile };
