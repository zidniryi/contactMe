import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {postContact} from '../../api/contact';

import Button from '../../components/Button';
import HeaderApp from '../../components/HeaderApp';
import TextInputApp from '../../components/TextInputApp';
import Title from '../../components/Title';

export default function AddScreen() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [photo, setphoto] = useState('');
  const [isDisable, setisDisable] = useState(true);

  const postContactAPI = async () => {
    const dataContact = {
      firstName: 'John',
      lastName: 'Dooe',
      age: 11,
      photo:
        'https://upload.wikimedia.org/wikipedia/ms/f/f9/Poster_Filem_Avatar_2.jpg',
    };
    try {
      const res = await postContact(dataContact);
      console.log(res);
      alert('Sukses');
    } catch (err) {
      console.log(err.response);
      alert('error');
    }
  };

  return (
    <View style={styles.viewContainer}>
      <HeaderApp title={'ADD CONTACT'} isBack />
      <Title title="Add New Contact" />
      <View>
        <TextInputApp
          placeholder="First Name"
          value={firstName}
          onChangeText={value => setfirstName(value)}
        />
        <TextInputApp
          placeholder="Last Name"
          value={lastName}
          onChangeText={value => setlastName(value)}
        />
        <TextInputApp
          placeholder="Age"
          value={age}
          onChangeText={value => setage(value)}
        />
        <TextInputApp
          placeholder="URL"
          value={photo}
          onChangeText={value => setphoto(value)}
        />
      </View>

      <View>
        <Button textButton="SAVE" onPress={postContactAPI} isDisable />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
