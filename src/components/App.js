import React from 'react';
import Header from './Header';
import Categories from './Categories';
import LeastNews from './LeastNews';
import FollowUs from './FollowUs';
import "../styles.css"
import Footer from './Footer';

const App = () => {
  return (
    <div className=""> 
    {/* for exp i gave class wrapper */}
      <Header />
      <Categories />
      <LeastNews />
      <FollowUs />
      <Footer />
    </div>
  )
};

export default App;