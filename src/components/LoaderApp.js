import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

// import { Container } from './styles';

const LoaderApp = () => {
  return (
    <View style={styles.viewLoader}>
      <ActivityIndicator color="#68AFDC" size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  viewLoader: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoaderApp;
