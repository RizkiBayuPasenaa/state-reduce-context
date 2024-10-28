import styles from "./Product.module.css";
import Card from "../fragments/Card";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Button from "../elements/Button";
import Modal from "../fragments/Modal";

function Product() {
  const { products, isModalOpen, openModal, closeModal, addProduct, editProduct, deleteProduct } = useContext(ProductContext);
  const [addNew, setAddNew] = useState(false);
  const [editProductData, setEditProductData] = useState(null);

  const handleAddNewClick = () => {
    setAddNew(true);
    setEditProductData(null);
    openModal();
  };

  const handleEditClick = (product) => {
    setAddNew(false);
    setEditProductData(product);
    openModal();
  };

  const handleSubmit = (productData) => {
    if (addNew) {
      addProduct(productData); 
    } else {
      editProduct(productData);
    }
    closeModal();
  };

  return (
    <>
      <Button type="button" onClick={handleAddNewClick}>Add new</Button>
      <div className={styles.productContainer}>
        {isModalOpen && (
          <Modal
          condition={addNew ? "Add Product" : "Edit Product"}
          product={editProductData}
          onClose={closeModal}
          onSubmit={handleSubmit}
          />
        )}
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            description={product.description}
            img={product.image}
            deletedProduct={() => deleteProduct(product.id)}
            editProduct={() => handleEditClick(product)}
            />
          ))}
      </div>
    </>
  );
}

export default Product;
