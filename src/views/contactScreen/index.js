import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, FlatList, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import PTRView from 'react-native-pull-to-refresh';
import NetInfo from '@react-native-community/netinfo';

import {CardContact} from '../../components/CardContact';
import {deleteContact, getContact} from '../../api/contact';
import LoaderApp from '../../components/LoaderApp';
import HeaderApp from '../../components/HeaderApp';
import ModalConfirm from '../../components/ModalConfirm';
import {editContactAction} from '../../redux/actions/editContactAction';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [contactData, setcontactData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [isPopUp, setisPopUp] = useState(false);
  const [id, setid] = useState('');
  const dispatch = useDispatch();
  /**
   * Get API Handler
   */
  const getContactAPI = async () => {
    setisLoading(true);
    try {
      const response = await getContact();
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
  const deleteContactAPI = async id => {
    try {
      await deleteContact(id);
      setisPopUp(false);
      getContactAPI();
    } catch (err) {
      showToastMessage(
        err.response.data.message
          ? err.response.data.message
          : 'Something Went Wrong Try Again!',
      );
    }
  };

  // OnRefresh
  const onRefresh = () => {
    NetInfo.fetch().then(connectionInfo => {
      if (connectionInfo.isConnected) {
        getContactAPI();
      } else {
        showToastMessage('No Internet Connection');
      }
    });
  };

  useEffect(() => {
    NetInfo.fetch().then(connectionInfo => {
      if (connectionInfo.isConnected) {
        getContactAPI();
      } else {
        showToastMessage('No Internet Connection');
      }
    });
    const unsubscribe = navigation.addListener('focus', () => {
      getContactAPI();
    });
    return unsubscribe;
  }, [navigation]);

  if (isLoading) return <LoaderApp />;
  return (
    <PTRView onRefresh={onRefresh}>
      <View style={styles.viewContainer}>
        <HeaderApp
          title={'CONTACT ME'}
          onAdd={() => navigation.navigate('AddContact')}
          isAdd
        />
        <ModalConfirm
          isVisible={isPopUp}
          onCancel={() => setisPopUp(false)}
          onDelete={() => deleteContactAPI(id)}
        />

        <FlatList
          data={contactData}
          renderItem={({item}) => {
            return (
              <CardContact
                avatar={{
                  uri:
                    item.photo == 'N/A'
                      ? 'https://wiradutaintersains.co.id/wp-content/uploads/2019/06/man-2_icon-icons.com_55041.png'
                      : item.photo,
                }}
                name={`${item ? item.firstName : ''} ${
                  item ? item.lastName : ''
                }`}
                onPress={() =>
                  navigation.navigate('DetailContact', {id: item.id})
                }
                onUpdate={() => {
                  dispatch(editContactAction(item));
                  navigation.navigate('EditContact');
                }}
                onDelete={() => {
                  setid(item.id);
                  setisPopUp(true);
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </PTRView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
