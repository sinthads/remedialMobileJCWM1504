import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/actions';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <Button title="Logout" onPress={() => dispatch(logoutAction())} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;
