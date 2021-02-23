import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function header(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/back.png')} />
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingLeft: 25,
    justifyContent: 'space-evenly',
    backgroundColor: '#2196F3',
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 30,
    fontSize: 30,
    color: 'white',
  },
});
