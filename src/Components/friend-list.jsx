import PropTypes from "prop-types";
import imgDefault from "./img_default.jpg";

function FrendList({
  imgProfile = imgDefault,
  name = "не известно",
  isOnline,
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

//   FrendList.PropTypes = {
//     imgProfile: PropTypes.string,
//     isOnline: PropTypes.bool,
//     name: PropTypes.string,

//   };

export default FrendList;
