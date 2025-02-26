import { useReducer, useState } from 'react';
const initialState = {
    products: [
      { id: 1, name: 'mobile' },
      { id: 2, name: 'watch' },
    ],
  };

  const productReducer = (state, action) => {
    switch (action.type) {
      case 'GET':
        return { ...state };
      case 'ADD':
        return { products: [...state.products, action.payload] };
      case 'DELETE':
        return { products: state.products.filter((product) => product.id !== action.payload) };
      default:
        return state;
    }
  };

  export default function ProductList() {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const [productName, setProductName] = useState('');   
    const [fetchedProducts, setFetchedProducts] = useState([]);
  
    const addProduct = () => {
        if (productName.trim()) {
            // Note: here I'm using  Date.now() to make unique id
            const newProduct = { id: Date.now(), name: productName };
            dispatch({ type: 'ADD', payload: newProduct });
            setProductName('');
        }
    };
  
    const deleteProduct = (id) => {
      dispatch({ type: 'DELETE', payload: id });
    };
    const getProducts = () => {
      dispatch({ type: 'GET' });
      setFetchedProducts(state.products);
    };
  
    return (
      <div >
        <h1 className="text-l font-bold mb-4">Product List</h1>
        <ul>
          {state.products.map((product) => (
            <li key={product.id} className="flex justify-between items-center mb-2">
              {product.name}
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 px-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input type='text' placeholder='enter product name' value={productName} onChange={(e) => setProductName(e.target.value)} className='border p-2'  /> <br />
        <button
          onClick={() => addProduct()}
          className="mt-4 px-4 py-2 rounded border border-[green]"
        >
          Add Product
        </button>
        <br />
        <br />
        <button onClick={getProducts} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Get Products</button>
        <ul>
          {fetchedProducts.map((product) => (
            <li key={product.id} className="flex justify-between items-center mb-2">
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  