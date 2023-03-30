import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

export default class Block extends Component {
  render() {
    const {
      flex,
      row,
      center,
      middle,
      right,
      space,
      color,
      animated,
      style,
      children,
      ...props
    } = this.props;

    const blockStyles = [
      styles.block,
      flex && {flex},
      flex === 0 && {flex: 0},
      row && styles.row,
      center && styles.center,
      middle && styles.middle,
      right && styles.right,
      space && {justifyContent: 'space-between'},
      style,
    ];

    if (animated) {
      return (
        <Animated.View style={blockStyles} {...props}>
          {children}
        </Animated.View>
      );
    }

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
});
