import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { connect } from 'react-redux';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple'
});

class Themes extends Component {
  handleThemePress = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />

        <ListItem
          text='Blue'
          onPress={() => {
            this.handleThemePress('blue');
          }}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />

        <ListItem
          text='Orange'
          onPress={() => {
            this.handleThemePress('orange');
          }}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text='Green'
          onPress={() => {
            this.handleThemePress('green');
          }}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text='Purple'
          onPress={() => {
            this.handleThemePress('purple');
          }}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

Themes.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Themes);
