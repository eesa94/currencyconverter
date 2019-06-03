import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  pressBaseCurrency = () => {
    console.log('press base');
  };

  pressQuoteCurrency = () => {
    console.log('press quote');
  };

  textChange = (text) => {
    console.log('changed text', text);
  };

  swapCurrency = () => {
    console.log('swap currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Logo />
        <InputWithButton
          onPress={this.pressBaseCurrency}
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onChangeText={this.textChange}
        />
        <InputWithButton
          onPress={this.pressQuoteCurrency}
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <ClearButton text='Reverse Currencies' onPress={this.swapCurrency} />
      </Container>
    );
  }
}

export default Home;
