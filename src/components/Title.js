import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import Block from './Block';
import Text from './Text';

export default class Title extends Component {
  render() {
    const {text, subText, rightItem, padding, primary, ...props} = this.props;

    return (
      <Block style={styles.wrapper} {...props}>
        <Block row style={styles.inner}>
          <Block>
            <Text accessibilityRole="header" bold black h5>
              {text}
            </Text>
            {subText && (
              <Text
                style={[
                  {
                    marginTop: 5,
                    color: 'rgba(0, 0, 0, 0.7)',
                  },
                ]}>
                {subText}
              </Text>
            )}
          </Block>
          {rightItem && <Block flex={0}>{rightItem}</Block>}
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  inner: {
    // paddingLeft: theme.space.xs,
    // borderLeftColor: theme.colors.secondary,
    // borderLeftWidth: 3,
  },
});
