import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {postContact} from '../../api/contact';

import Button from '../../components/Button';
import HeaderApp from '../../components/HeaderApp';
import TextInputApp from '../../components/TextInputApp';
import Title from '../../components/Title';
import {regex, validationForm} from '../../helpers';

export default function AddScreen() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [photo, setphoto] = useState('');

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
      <ScrollView>
        <View>
          <TextInputApp
            placeholder="First Name"
            value={firstName}
            onChangeText={value => setfirstName(value)}
          />
          <Text style={styles.textError}>
            {regex.name.test(firstName) || !firstName
              ? ''
              : 'Input with First Name'}
          </Text>
          <TextInputApp
            placeholder="Last Name"
            value={lastName}
            onChangeText={value => setlastName(value)}
          />
          <Text style={styles.textError}>
            {regex.name.test(lastName) || !lastName
              ? ''
              : 'Input with First Last Name'}
          </Text>
          <TextInputApp
            placeholder="Age"
            value={age}
            onChangeText={value => setage(value)}
          />
          <Text style={styles.textError}>
            {regex.name.test(lastName) || !lastName
              ? ''
              : 'Input with Age Number'}
          </Text>
          <TextInputApp
            placeholder="URL"
            value={photo}
            onChangeText={value => setphoto(value)}
          />

          <Text style={styles.textError}>
            {regex.urlPhoto.test(photo) || !photo ? '' : 'Input with URL image'}
          </Text>
        </View>

        <View>
          <Button
            textButton="SAVE"
            onPress={postContactAPI}
            isDisable={validationForm()}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textError: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(-1.33),
  },
});
