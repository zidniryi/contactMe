import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
        <Text>Add New Contact</Text>
      </View>
      <View>
        <TextInputApp placeholder="First Name" />
        <TextInputApp placeholder="Last Name" />
        <TextInputApp placeholder="Age" />
        <TextInputApp placeholder="URL" />
      </View>

      <View>
        <TouchableOpacity>
          <View style={styles.viewButton}>
            <Text style={styles.textButton}>SAVE</Text>
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

  viewButton: {
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(1.3),
    height: responsiveHeight(8),
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3CA6E2',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: responsiveFontSize(2.2),
    color: '#FFF',
    fontWeight: 'bold',
  },
});
