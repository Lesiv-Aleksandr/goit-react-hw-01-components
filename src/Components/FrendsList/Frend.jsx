import PropTypes from "prop-types";
import imgDefault from "./img_default.jpg";

function Frend({
  imgProfile = imgDefault,
  name = "не известно",
  isOnline,
  id,
}) {
  return (
    <li>
      <span>
        <p>{isOnline === true ? "offline" : "onlane"}</p>
      </span>
      <img class="avatar" src={imgProfile} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

Frend.propTypes = {
  imgProfile: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Frend;
