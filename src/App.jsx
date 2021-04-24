import './App.css'
import React from 'react'
import Header from './components/Header'
import Card from './components/layout/Card'
import Body from './components/Body'
import Footer from './components/Footer'


export default () => (
  <div className="App">    
    <Card>
      <Header />
      <Body />
      <Footer />
    </Card>
  </div>
);

