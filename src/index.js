import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from "./routes/Home";
import Pokemones from './routes/Pokemones';
import Post from './routes/Post';
import Error404 from './routes/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="pokemones" element={<Pokemones />}/>
            <Route path="pokemones/:name" element={<Post />}/>
            <Route path="*" element={<Error404 />}/>
          </Route>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);


