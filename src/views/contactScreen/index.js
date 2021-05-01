import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, FlatList} from 'react-native';

import {CardContact} from '../../components/CardContact';
import {getContact} from '../../api/contact';
import LoaderApp from '../../components/LoaderApp';
import HeaderApp from '../../components/HeaderApp';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [contactData, setcontactData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  /**
   * Get API Handler
   */
  const getContactAPI = async () => {
    try {
      const response = await getContact();
      setcontactData(response.data);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getContactAPI();
  }, []);
  if (isLoading) return <LoaderApp />;
  return (
    <View style={styles.viewContainer}>
      <HeaderApp
        title={'CONTACT ME'}
        onAdd={() => navigation.navigate('AddContact')}
        isAdd
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
              name={`${item.firstName} ${item.lastName}`}
              onPress={() => navigation.navigate('DetailContact')}
              onUpdate={() => navigation.navigate('EditContact')}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
