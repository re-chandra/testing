import React from 'react';

const Logo = (props) => {
  return <img src="/images/logo.svg" alt="Logo" {...props} style={{width:"100%",maxWidth:"100px"}}/>;
};

export default Logo;
