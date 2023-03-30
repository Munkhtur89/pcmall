import React, {Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {colors} from '../styles';

export default class Typography extends Component {
  render() {
    const {
      // sizes
      titleText,
      h0,
      h1,
      h2,
      h3,
      h4,
      h5,
      body,
      small,
      caption,
      smallCaption,
      tabbar,
      // others
      size,
      transform,
      align,
      // weight
      bold,
      extrabold,
      extralight,
      light,
      medium,
      regular,
      semibold,
      // position
      center,
      right,
      // colors
      color,
      primary,
      secondary,
      black,
      white,
      gray,
      danger,
      // success,
      style,
      children,
      ...props
    } = this.props;

    const ts = [
      styles.text,
      // sizes
      titleText && styles.titleText,
      h0 && styles.h0,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      h5 && styles.h5,
      body && styles.bodyText,
      small && styles.smallText,
      caption && styles.captionText,
      smallCaption && styles.smallCaptionText,
      tabbar && styles.tabbarText,
      size && {fontSize: size},
      transform && {textTransform: transform},
      align && {textAlign: align},
      // weight
      bold && styles.bold,
      extrabold && styles.extrabold,
      extralight && styles.extralight,
      light && styles.light,
      medium && styles.medium,
      regular && styles.regular,
      semibold && styles.semibold,
      // position
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && {color},
      // colors
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      danger && styles.danger,
      // success && styles.success,
      style, // rewrite predefined styles
    ];

    return (
      <Text
        style={ts}
        accessibilityRole={titleText ? 'header' : 'text'}
        {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: Platform.OS === 'ios' ? RFPercentage(1.9) : RFPercentage(2.1),
    fontFamily:
      Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Medium',
    color: colors.black,
  },
  bodyText: {
    fontSize: Platform.OS === 'ios' ? RFPercentage(1.9) : RFPercentage(2.1),
    fontFamily:
      Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Medium',
    color: colors.black,
  },
  smallText: {
    fontSize: Platform.OS === 'ios' ? RFPercentage(1.8) : RFPercentage(2),
    color: colors.black,
  },
  captionText: {
    fontSize: Platform.OS === 'ios' ? RFPercentage(1.6) : RFPercentage(1.9),
    color: colors.black,
  },
  tabbarText: {
    fontSize: Platform.OS === 'ios' ? RFPercentage(1.5) : RFPercentage(1.8),
    color: colors.black,
  },
  smallCaptionText: {
    fontSize: RFPercentage(1.15),
  },
  titleText: {
    fontSize: RFPercentage(2.4),
    color: colors.text.primary,
    fontFamily: 'Manrope-Bold',
  },
  h0: {
    fontSize: RFPercentage(3.2),
    color: colors.text.primary,
  },
  h1: {
    fontSize: RFPercentage(3),
    color: colors.text.primary,
  },
  h2: {
    fontSize: RFPercentage(2.8),
    color: colors.text.primary,
  },
  h3: {
    fontSize: RFPercentage(2.6),
    color: colors.text.primary,
  },
  h4: {
    fontSize: RFPercentage(2.4),
    color: colors.text.primary,
  },
  h5: {
    fontSize: RFPercentage(2),
    color: colors.text.primary,
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  extrabold: {
    fontFamily: 'Montserrat-ExtraBold',
  },
  extralight: {
    fontFamily: 'Montserrat-ExtraLight',
  },
  light: {
    fontFamily: 'Montserrat-Light',
  },
  medium: {
    fontFamily: 'Montserrat-Medium',
  },
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
  semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  primary: {color: colors.primary},
  secondary: {color: colors.secondary},
  black: {color: colors.black},
  white: {color: colors.white},
  gray: {color: 'rgba(0, 0, 0, 0.7)'},
  danger: {color: colors.danger},
  // success: {color: colors.success},
});
