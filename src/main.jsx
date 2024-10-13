import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter instead of createBrowserRouter
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);



// import App from './App';
// import ErrorPage from './pages/ErrorPage';
// import AboutPage from './pages/AboutPage';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';

// const router = [
//   { path: '/', component: Home, exact: true },
//   { path: '/AboutPage', component: AboutPage },
//   { path: '/Contact', component: Contact },
//   { path: '/Portfolio', component: Portfolio },

// const router = [
//   { path: '/', component: Home, exact: true },
//   { path: '/AboutPage', component: AboutPage },
//   { path: '/Contact', component: Contact },
//   { path: '*', component: ErrorPage }, // This will catch any non-existing routes and render the ErrorPage component
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);