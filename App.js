import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import shortid from 'shortid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: shortid.generate(), text: 'Milk'},
    {id: shortid.generate(), text: 'Eggs'},
    {id: shortid.generate(), text: 'Bread'},
    {id: shortid.generate(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping list" />
      <AddItem setItems={setItems}/>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
