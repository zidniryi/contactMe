import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CardContact} from './components/CardContact';

export default function App() {
  return (
    <View style={styles.viewContainer}>
      <CardContact
        avatar={{
          uri:
            'https://wiradutaintersains.co.id/wp-content/uploads/2019/06/man-2_icon-icons.com_55041.png',
        }}
        name={'John Doe Liban'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  viewCard: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageAvatar: {
    width: 60,
    height: 60,
    marginLeft: responsiveWidth(5.33),
  },
  textName: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#555555',
    marginLeft: responsiveWidth(-11.33),
  },
  buttonCircle: {
    width: 50,
    height: 50,
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
  viewFlex: {
    flexDirection: 'row',
  },
});
