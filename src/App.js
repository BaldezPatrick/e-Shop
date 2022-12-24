import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from "./Routes/Routes";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode>
  );
}

export default App;
