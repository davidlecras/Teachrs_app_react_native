import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/components/header/header';
import MainCarousel from './src/containers/carousel/MainCarousel';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header>Teach'rs favoris</Header>
      <MainCarousel />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
