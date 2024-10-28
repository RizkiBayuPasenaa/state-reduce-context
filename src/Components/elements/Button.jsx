import PropTypes from "prop-types";
function Button(props) {
  const { type, children, onClick } = props;
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button;
