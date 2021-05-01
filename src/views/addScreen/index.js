import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../components/Button';
import HeaderApp from '../../components/HeaderApp';
import TextInputApp from '../../components/TextInputApp';

export default function AddScreen() {
  return (
    <View style={styles.viewContainer}>
      <HeaderApp
        title={'ADD CONTACT'}
        onAdd={() => navigation.navigate('AddContact')}
      />

      <View>
        <Text style={styles.textTitle}>Add New Contact</Text>
      </View>
      <View>
        <TextInputApp placeholder="First Name" />
        <TextInputApp placeholder="Last Name" />
        <TextInputApp placeholder="Age" />
        <TextInputApp placeholder="URL" />
      </View>

      <View>
        <Button textButton="SAVE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#555',
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.33),
  },
});
