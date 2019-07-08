import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency } from '../actions/currencies';
import { changeCurrencyAmount } from '../actions/currencies';

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

  handleChangeText = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  optionsPress = () => {
    console.log('options press');
    this.props.navigation.navigate('Options');
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice: '...';
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.optionsPress} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            onPress={this.pressBaseCurrency}
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType='numeric'
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            onPress={this.pressQuoteCurrency}
            buttonText={this.props.quoteCurrency}
            editable={false}
            value={quotePrice}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            text='Reverse Currencies'
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  isFetching: PropTypes.bool,
  lastConvertedDate: PropTypes.object
};

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date()
  };
};

export default connect(mapStateToProps)(Home);
