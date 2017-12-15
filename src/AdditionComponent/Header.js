import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ HeaderText }) => (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{HeaderText}</Text>
    </View>
  );

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,

  }
};

export default Header;
