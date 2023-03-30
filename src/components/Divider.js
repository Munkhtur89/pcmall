import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import Block from './Block';
import {colors, size} from '../styles';

export default class Divider extends Component {
  render() {
    const {color, style, ...props} = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <Block
        color={color || colors.border.color}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    height: size.button.disabled,
    backgroundColor: colors.border.color,
  },
});
