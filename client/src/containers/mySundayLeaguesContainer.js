import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MySundayLeagues from '../components/mySundayLeagues';
import axios from 'axios';

const MySundayLeaguesContainer = () => {
  const user = useSelector((state) => state.auth.user);
  const [leagues, setLeagues] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/sunday-leagues/${user.id}`).then((res) => {
      setLeagues(res.data);
    });
  }, [user]);

  return <MySundayLeagues leagues={leagues} />;
};

export default MySundayLeaguesContainer;
