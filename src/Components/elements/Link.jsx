import { Link } from "react-router-dom";
function LinkTo(props) {
  return (
    <Link to={'/'}>{props.children}</Link> 
  )
}

export default LinkTo;
