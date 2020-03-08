import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;
  let jose = 'JOSE';
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
