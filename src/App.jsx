import './App.css'
import React from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import About from './components/about/About'
import Blog from './components/blog/Blog'

export default () => (
  <div className="App">    
      <Header />
      <Body />
      <About />
      <Blog />
  </div>
);
