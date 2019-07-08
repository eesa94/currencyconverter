import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency } from '../actions/currencies';
import { changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  // navigation
  // because Home screen is being rendered via the createStackNavigator (config/routes.js) it has access to navigation.navigate on its props. this function takes in the name of a screen as a string

  pressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  pressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  changeText = (amount) => {
    console.log(changeCurrencyAmount(amount));
  };

  swapCurrency = () => {
    // make this function work with this.props.dispatch
    console.log(swapCurrency());
  };

  optionsPress = () => {
    console.log('options press');
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.optionsPress} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            onPress={this.pressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType='numeric'
            onChangeText={this.changeText}
          />
          <InputWithButton
            onPress={this.pressQuoteCurrency}
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton text='Reverse Currencies' onPress={this.swapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
