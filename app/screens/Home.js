import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

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

  optionsPress = () => {
    console.log('options press');
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
            onChangeText={this.textChange}
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

export default Home;
