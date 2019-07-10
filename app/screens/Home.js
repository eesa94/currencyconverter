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
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
  // navigation
  // because Home screen is being rendered via the createStackNavigator (config/routes.js) it has access to navigation.navigate on its props. this function takes in the name of a screen as a string

  pressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base'
    });
  };

  pressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote'
    });
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
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor
    } = this.props;

    let quotePrice = '...';
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.optionsPress} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo tintColor={primaryColor} />
          <InputWithButton
            onPress={this.pressBaseCurrency}
            buttonText={baseCurrency}
            defaultValue={amount.toString()}
            keyboardType='numeric'
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            onPress={this.pressQuoteCurrency}
            buttonText={quoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConvertedDate}
            conversionRate={conversionRate}
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
  lastConvertedDate: PropTypes.object,
  isFetching: PropTypes.bool,
  primaryColor: PropTypes.string
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
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor
  };
};

export default connect(mapStateToProps)(Home);
