import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {LoginScreen} from '../screens';
import {loginAction} from '../redux/actions';
import TabNav from './TabNav';

const MainNav = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('username', (err, result) => {
      if (result) setUser(result);
    });
    if (user) dispatch(loginAction(user));
  }, []);

  const username = useSelector(state => state.user.username);

  return (
    <>
      {username ? (
        <>
          <TabNav />
        </>
      ) : (
        <>
          <LoginScreen />
        </>
      )}
    </>
  );
};

export default MainNav;
