import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <h2>Hello {props.name}</h2>
    </div>
  );
};

export default Home;
