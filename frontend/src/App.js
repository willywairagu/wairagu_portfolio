import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import "aos/dist/aos.css";

import theme from "./theme/theme";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import BlogList  from "./components/BlogList";
import BlogPost  from "./components/BlogPost";  

const App = () => {  
  return (
    <HelmetProvider>
      <Helmet 
        titleTemplate="%s | Wairagu "
        defaultTitle="Wairagu"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename="/">
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;