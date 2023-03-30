import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  SafeAreaView,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import AutoHeightImage from 'react-native-auto-height-image';

import {Block, Text} from '../../components';
import {colors, size} from '../../styles';
import Logo from '../../../assets/PCmall-logo.png';

const windowWidth = Dimensions.get('window').width;

const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => (
        <SafeAreaView style={styles.container} edges={['bottom']}>
          <Block center middle>
            <AutoHeightImage width={windowWidth / 2.5} source={Logo} />
          </Block>
        </SafeAreaView>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: size.space.sm,
    backgroundColor: colors.primary,
  },
  tag: {
    marginLeft: size.space.xs / 2,
    paddingHorizontal: size.space.xs / 2,
    backgroundColor: colors.danger,
    borderRadius: 6,
  },
});

export default SplashScreen;
