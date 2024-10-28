import { createContext, useReducer, useState } from 'react';
import initialProduct from '../Data/ProductData';
import PropTypes from 'prop-types';

// Aksi
const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Reducer function
function productReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case EDIT_PRODUCT:
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(productReducer, initialProduct);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Actions
  const addProduct = (newProduct) => {
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  };

  const editProduct = (updatedProduct) => {
    dispatch({ type: EDIT_PRODUCT, payload: updatedProduct });
  };

  const deleteProduct = (productId) => {
    dispatch({ type: DELETE_PRODUCT, payload: productId });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isModalOpen,
        openModal,
        closeModal,
        addProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductContext }
export default ProductProvider;
