import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <div>
      <div>
        <Announcement />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
