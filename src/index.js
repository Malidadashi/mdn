import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import Error_Page from './Component/Error_Page';

const router = createBrowserRouter([
  {
    path: "/x",
    element:<div>
   Hi there
    </div>,
    errorElement:<Error_Page/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </Brow
    serRouter> */}
     <RouterProvider router={router} />
<App/>
  </React.StrictMode>
);
reportWebVitals();
