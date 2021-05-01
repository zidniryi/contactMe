import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ToastAndroid} from 'react-native';
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
import {regex} from '../../helpers';

export default function AddScreen() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [photo, setphoto] = useState('');
  const [isDisable, setisDisable] = useState(true);

  const postContactAPI = async () => {
    const dataContact = {
      firstName,
      lastName,
      age,
      photo,
    };
    try {
      const res = await postContact(dataContact);
      console.log(res);
      alert('Sukses');
    } catch (err) {
      showToastMessage('Server Error!, Try Again Later.');
    }
  };

  const showToastMessage = textToast => {
    ToastAndroid.showWithGravityAndOffset(
      textToast,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const validationButton = () => {
    if (
      regex.name.test(firstName) &&
      firstName &&
      regex.name.test(lastName) &&
      lastName &&
      regex.age.test(age) &&
      age &&
      regex.urlPhoto.test(photo) &&
      photo
    ) {
      setisDisable(false);
    } else {
      setisDisable(true);
    }
  };

  console.log(isDisable);

  return (
    <View style={styles.viewContainer}>
      <HeaderApp title={'ADD CONTACT'} isBack />
      <Title title="Add New Contact" />
      <ScrollView>
        <View>
          <TextInputApp
            placeholder="First Name"
            value={firstName}
            onChangeText={value => {
              setfirstName(value);
              validationButton();
            }}
          />
          <Text style={styles.textError}>
            {regex.name.test(firstName) || !firstName
              ? ''
              : 'Input with Last Name'}
          </Text>
          <TextInputApp
            placeholder="Last Name"
            value={lastName}
            onChangeText={value => {
              setlastName(value);
              validationButton();
            }}
          />
          <Text style={styles.textError}>
            {regex.name.test(lastName) || !lastName
              ? ''
              : 'Input with First Last Name'}
          </Text>
          <TextInputApp
            placeholder="Age"
            value={age}
            onChangeText={value => {
              setage(value);
              validationButton();
            }}
          />
          <Text style={styles.textError}>
            {regex.age.test(age) || !age ? '' : 'Input with Age Number'}
          </Text>
          <TextInputApp
            placeholder="URL"
            value={photo}
            onChangeText={value => {
              setphoto(value);
              validationButton();
            }}
          />

          <Text style={styles.textError}>
            {regex.urlPhoto.test(photo) || !photo ? '' : 'Input with URL image'}
          </Text>
        </View>

        <View>
          <Button
            textButton="SAVE"
            onPress={postContactAPI}
            isDisable={
              regex.name.test(firstName) &&
              regex.name.test(lastName) &&
              regex.age.test(age) &&
              regex.urlPhoto.test(photo)
                ? false
                : true
            }
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
