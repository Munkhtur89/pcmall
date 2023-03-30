import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Platform} from 'react-native';
import {colors, size} from '../styles';

export default class Input extends Component {
  state = {
    toggleSecure: false,
  };

  render() {
    const {
      label,
      rightLabel,
      full,
      email,
      phone,
      number,
      password,
      secure,
      style,
      placeholderTextColor,
      ...props
    } = this.props;
    const {toggleSecure} = this.state;
    const isSecure = toggleSecure ? false : secure;
    const inputStyles = [styles.input, full && styles.full, style];

    const inputType = email
      ? 'email-address'
      : number
      ? 'numeric'
      : phone
      ? 'phone-pad'
      : 'default';

    return (
      <View>
        <TextInput
          style={inputStyles}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          placeholder={label}
          clearButtonMode="while-editing"
          placeholderTextColor={placeholderTextColor}
          {...props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: size.border.width,
    borderColor: colors.border.color,
    borderRadius: size.borderRadius,
    color: colors.black,
    paddingVertical: Platform.OS === 'ios' ? 9 : 3,
    paddingHorizontal: size.space.sm,
    backgroundColor: colors.white,
  },
  label: {
    textTransform: 'uppercase',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  full: {
    // width: width - 50,
  },
});
