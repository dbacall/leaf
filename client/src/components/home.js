import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = (props) => {
  const name = useSelector((state) => state.auth.user.name);

  return (
    <div>
      <h1>Home</h1>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default Home;
