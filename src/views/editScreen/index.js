import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from '../../components/Button';
import HeaderApp from '../../components/HeaderApp';
import TextInputApp from '../../components/TextInputApp';
import Title from '../../components/Title';

export default function EditScreen() {
  return (
    <View style={styles.viewContainer}>
      <HeaderApp title={'UPDATE CONTACT'} isBack />
      <Title title="Update Contact" />
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
});
