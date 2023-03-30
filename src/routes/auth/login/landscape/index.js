import React, {useState, useEffect, useRef} from 'react';
import {colors, size} from '../../../../styles';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  View,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Block, LoginInput, Button} from '../../../../components';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import {Checkbox} from 'react-native-paper';
const {width} = Dimensions.get('screen');

const App = () => {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Block style={styles.container}>
        {/* <LinearGradient
          colors={['#ef332b', '#f57445', '#f99d56']}
          style={styles.linearGradients}>
          <Block style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../../../../assets/PCmall-logo.png')}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                resizeMode: 'contain',
              }}
            />
          </Block>
        </LinearGradient> */}
        <Block
          style={{
            backgroundColor: 'red',
            height: '100%',
          }}></Block>

        <Block>
          <Block
            style={{
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Block style={styles.content}>
              <Block style={{flex: 0, alignItems: 'center'}}>
                <LinearGradientText
                  colors={['#ef332b', '#f99d56']}
                  text="Нэвтрэх"
                  textStyle={{
                    fontSize: 35,
                    fontWeight: 'bold',
                  }}
                />
              </Block>

              <Block style={styles.TextInput}>
                <Text style={{padding: 10, fontSize: 20, color: colors.black}}>
                  Нэвтрэх дугаар
                </Text>
                <LoginInput style={styles.input} />
                <Text style={{padding: 10, fontSize: 20, color: colors.black}}>
                  Нууц үг
                </Text>
                <LoginInput style={styles.input} />
              </Block>
              <Block
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  flex: 0,
                }}>
                <Checkbox.Android status={checked ? 'checked' : 'unchecked'} />
                <Text style={{fontSize: 18}}>Нэвтрэх нэр хадгалах</Text>
              </Block>
              <Button onPress={() => navgation.navigate('Dashboard')}>
                <Text style={{color: colors.white, fontSize: 20}}>Нэвтрэх</Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.background.primary,
  },

  linearGradients: {
    flex: 1,
    paddingLeft: width / 15,
    paddingRight: width / 15,
    maxWidth: width / 2.5,
    borderTopRightRadius: size.radius.sm,
    borderBottomRightRadius: size.space.sm,
  },

  content: {
    flex: 0,

    backgroundColor: colors.white,
    borderRadius: size.radius.lg,
    marginHorizontal: size.space.md,
    paddingHorizontal: size.space.xl,
    paddingVertical: size.space.xl,
    width: width / 2.3,
    height: width / 2.3,
  },
  input: {
    borderRadius: size.radius.sm,
    backgroundColor: colors.background.primary,
    height: width / 20,
  },

  TextInput: {
    paddingHorizontal: size.space.sm,
    paddingTop: size.space.sm,
  },
});

export default App;
