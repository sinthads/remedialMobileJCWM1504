import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {catFetch} from '../redux/actions';
import {CatCard} from '../components';

const FeedScreen = ({navigation}) => {
  const [catList, setCatList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let data = await dispatch(catFetch());
      await setCatList([...data]);
      console.log(catList);
    };
    fetchData();
  }, []);

  const renderCatCard = ({item}) => {
    return <CatCard image={item.url} nav={navigation} />;
  };

  return (
    <View>
      <FlatList data={catList} numColumns={2} renderItem={renderCatCard} />
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

export default FeedScreen;
