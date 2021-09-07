import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <Link to="/">Home link</Link>
    <Link to="/details">Details link</Link>
  </>
);

export default Header;
