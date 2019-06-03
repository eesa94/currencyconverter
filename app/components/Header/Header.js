import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        resizeMode='contain'
        source={require('./images/gear.png')}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func
};

export default Header;
