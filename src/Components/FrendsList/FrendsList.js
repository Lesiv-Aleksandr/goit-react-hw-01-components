import Frend from "./Frend";
import PropTypes from "prop-types";

function FrendsList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <Frend key={item.id} imgProfile={item.avatar} name={item.name} />
        </li>
      ))}
    </ul>
  );
}
FrendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default FrendsList;
