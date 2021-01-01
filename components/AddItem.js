import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import shortid from 'shortid';

const AddItem = ({setItems}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  const onPress = () => {
    if (!text)
      return Alert.alert('Error', 'Please enter an item', [{text: 'OK'}]);
    setItems((prevItems) => [{id: shortid.generate(), text}, ...prevItems]);
    setText('');
  };
  return (
    <View>
      <TextInput
        placeholder="Add item"
        styles={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {height: 60, padding: 8, fontSize: 16},
  btn: {backgroundColor: '#c2bad8', padding: 9, margin: 5},
  btnText: {color: 'darkslateblue', fontSize: 20, textAlign: 'center'},
});

export default AddItem;
