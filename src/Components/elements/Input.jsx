import PropTypes from "prop-types";

function Input(props) {
  const {type, placeholder, name, value, onChange} = props;
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      value={value} 
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input;
