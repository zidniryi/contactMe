import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ToastAndroid} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';

import Button from '../../components/Button';
import HeaderApp from '../../components/HeaderApp';
import TextInputApp from '../../components/TextInputApp';
import Title from '../../components/Title';
import {regex} from '../../helpers';
import {putContact} from '../../api/contact';
import {useNavigation} from '@react-navigation/native';

export default function EditScreen() {
  const editReducer = useSelector(state => state.editReducer);
  const [firstName, setfirstName] = useState(editReducer.firstName);
  const [lastName, setlastName] = useState(editReducer.lastName);
  const [age, setage] = useState(editReducer.age);
  const [photo, setphoto] = useState(editReducer.photo);
  const navigation = useNavigation();

  const putContactAPI = async () => {
    const dataContact = {
      firstName,
      lastName,
      age,
      photo,
    };
    try {
      await putContact(dataContact);
      navigation.navigate('Contact');
    } catch (err) {
      showToastMessage(
        err.response.data.message
          ? err.response.data.message
          : 'Something Went Wrong Try Again!',
      );
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

  return (
    <View style={styles.viewContainer}>
      <HeaderApp title={'EDIT CONTACT'} isBack />
      <Title title="Edit Contact" />
      <ScrollView>
        <View>
          <TextInputApp
            placeholder="First Name"
            value={firstName}
            onChangeText={value => {
              setfirstName(value);
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
            }}
          />
          <Text style={styles.textError}>
            {regex.name.test(lastName) || !lastName
              ? ''
              : 'Input with First Last Name'}
          </Text>
          <TextInputApp
            placeholder="Age"
            value={age.toString()}
            onChangeText={value => {
              setage(value);
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
            }}
          />

          <Text style={styles.textError}>
            {regex.urlPhoto.test(photo) || !photo ? '' : 'Input with URL image'}
          </Text>
        </View>

        <View>
          <Button
            textButton="UPDATE"
            onPress={putContactAPI}
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
