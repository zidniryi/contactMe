import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Feather';
import {useNavigation} from '@react-navigation/native';

import HeaderApp from '../../components/HeaderApp';
import {deleteContact, getContactId, putContact} from '../../api/contact';
import LoaderApp from '../../components/LoaderApp';
import {useDispatch} from 'react-redux';
import {editContactAction} from '../../redux/actions/editContactAction';

export default function DetailScreen({route}) {
  const [contactData, setcontactData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const {id} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * Get API Handler
   */
  const getContactDetailAPI = async id => {
    try {
      const response = await getContactId(id);
      setcontactData(response.data);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
    }
  };
  // Toast Message
  const showToastMessage = textToast => {
    ToastAndroid.showWithGravityAndOffset(
      textToast,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  /**
   * Delete API Handler
   */
  const deleteContactDetailAPI = async id => {
    try {
      await deleteContact(id);
      navigation.goBack();
    } catch (err) {
      showToastMessage(
        err.response.data.message
          ? err.response.data.message
          : 'Something Went Wrong Try Again!',
      );
    }
  };

  useEffect(() => {
    getContactDetailAPI(id);
  }, []);

  if (isLoading) return <LoaderApp />;
  return (
    <View style={styles.viewContainer}>
      <HeaderApp title={'ABOUT CONTACT'} isBack />
      <View style={styles.viewImage}>
        <Image
          source={{uri: 'https://www.w3schools.com/w3images/avatar2.png'}}
          style={styles.imageProfile}
        />
        <Text style={styles.textName}>
          {contactData.firstName + ' ' + contactData.lastName}
        </Text>
        <Text style={styles.textAge}>{contactData.age} Y.0</Text>
      </View>

      <View style={styles.viewCenter}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            dispatch(editContactAction(contactData));
            navigation.navigate('EditContact');
          }}>
          <View style={[styles.buttonCircle, {backgroundColor: '#2ecc71'}]}>
            <Icon name="edit" size={25} color="#FFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => deleteContactDetailAPI(id)}>
          <View
            style={[
              styles.buttonCircle,
              {backgroundColor: '#3CA6E2', width: 90},
            ]}>
            <Icon name="share" size={25} color="#FFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => deleteContactDetailAPI(id)}>
          <View style={[styles.buttonCircle, {backgroundColor: '#c0392b'}]}>
            <Icon name="trash" size={25} color="#FFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.33),
  },
  viewImage: {
    alignItems: 'center',
    width: responsiveWidth(100),
    backgroundColor: '#FFF',
    borderBottomColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderBottomEndRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
  },
  textName: {
    fontSize: responsiveFontSize(2.6),
    color: '#1A2B6E',
    fontWeight: 'bold',
  },
  textAge: {
    fontSize: responsiveFontSize(1.6),
    color: '#DDD',
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2.2),
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    marginHorizontal: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: responsiveHeight(2.3),
    alignSelf: 'center',
  },
});
