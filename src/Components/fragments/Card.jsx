import Button from "../elements/Button";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card(props) {
  const {
    img, title, description, deletedProduct, editProduct
  } = props;

  return (
    <div className={styles.cardContainer}>
      {img ? <div className={styles.cardHeader}>
          <img src={img} alt="img" />
        </div> : null}
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <Button type="button">
          Detail
        </Button>
        <Button type="button" onClick={editProduct}>
          Edit
        </Button>
        <Button type="button" onClick={deletedProduct}>
          Delete
        </Button>
      </div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  deletedProduct: PropTypes.func,
  editProduct: PropTypes.func
}

export default Card;
