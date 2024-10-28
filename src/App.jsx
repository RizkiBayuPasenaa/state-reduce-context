import Product from "./Components/layouts/Product";
import ProductProvider from "./Context/ProductContext";
function App() {
  return (
    <>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </>
  )
}

export default App;
