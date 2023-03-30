import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';

import {size, colors} from '../styles';

export default class Button extends Component {
  render() {
    const {style, opacity, children, outline, noborder, ...props} = this.props;
    const buttonStyles = [
      outline ? styles.outline : noborder ? styles.noborder : styles.button,
      style,
    ];

    return (
      <Ripple {...props} accessibilityRole="button" style={buttonStyles}>
        {children}
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryDark,
    borderRadius: size.radius.base,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  outline: {
    borderRadius: size.radius.base,
    paddingVertical: size.space.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  noborder: {
    paddingVertical: size.space.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
