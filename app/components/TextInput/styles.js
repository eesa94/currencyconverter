import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
const inputHeight = 48;
const borderRadius = 5;

export default EStyleSheet.create({
  $buttonBackgroundColourBase: '$white',
  $buttonBackgroundColourModifier: 0.1,

  container: {
    height: inputHeight,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: borderRadius,
    backgroundColor: '$white'
  },
  containerDisabled: {
    backgroundColor: '$lightGrey'
  },
  buttonContainer: {
    height: inputHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue'
  },
  input: {
    height: inputHeight,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText'
  },
  border: {
    height: inputHeight,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  }
});
