import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
