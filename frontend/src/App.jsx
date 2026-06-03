import Navbar from './components/Navbar.jsx';
import './index.css'

function App() {
  return <Navbar />
}


//test data
const MOCK_PRODUCTS = [
  { id: 1, name: "Blue T-Shirt", price: 19.99, image_url: "https://via.placeholder.com/150", stock: 10 },
  { id: 2, name: "Black Hoodie", price: 45.50, image_url: "https://via.placeholder.com/150", stock: 3 },
  { id: 3, name: "White Sneakers", price: 80.00, image_url: "https://via.placeholder.com/150", stock: 0 }
];

export default App;