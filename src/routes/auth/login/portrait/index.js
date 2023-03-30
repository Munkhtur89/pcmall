// import React, {useState, useEffect, useRef} from 'react';
// import {colors, size} from '../../../../styles';
// import {
//   StyleSheet,
//   ScrollView,
//   Image,
//   Dimensions,
//   View,
//   Text,
// } from 'react-native';
// // import {TextInput, Button, Surface} from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import {Block, LoginInput, Button} from '../../../../components';
// import {LinearGradientText} from 'react-native-linear-gradient-text';
// import {Checkbox} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const {width} = Dimensions.get('screen');

// const App = ({navgation}) => {
//   const [loading, setLoading] = useState(false);
//   const [checked, setChecked] = React.useState(false);

//   return (
//     <>
//       <LinearGradient
//         colors={['#ee2e29', '#f57445', '#f99d56']}
//         style={styles.linearGradient}>
//         <Block
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             flex: 0,
//             paddingTop: '20%',
//           }}>
//           <Image
//             source={require('../../../../../assets/PCmall-logo.png')}
//             style={{
//               maxWidth: '100%',
//               maxHeight: '100%',
//               resizeMode: 'contain',
//             }}
//           />
//         </Block>
//         <Block style={{alignItems: 'center', justifyContent: 'center'}}>
//           <Block style={styles.content}>
//             <Block style={{flex: 0, alignItems: 'center'}}>
//               <LinearGradientText
//                 colors={['#ef332b', '#f99d56']}
//                 text="Нэвтрэх"
//                 textStyle={{
//                   fontSize: 30,
//                   fontWeight: 'bold',
//                 }}
//               />
//             </Block>

//             <Block style={styles.TextInput}>
//               <Text style={{padding: 10, fontSize: 20, color: colors.black}}>
//                 Нэвтрэх дугаар
//               </Text>
//               <LoginInput style={styles.input} />
//               <Text style={{padding: 10, fontSize: 20, color: colors.black}}>
//                 Нууц үг
//               </Text>
//               <LoginInput style={styles.input} />
//             </Block>
//             <Block
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 padding: 10,
//                 flex: 0,
//               }}>
//               <Checkbox.Android status={checked ? 'checked' : 'unchecked'} />
//               <Text style={{fontSize: 18}}>Нэвтрэх нэр хадгалах</Text>
//             </Block>

//             <Button onPress={() => navgation.navigate('Dashboard')}>
//               <Text style={{color: colors.white, fontSize: 20}}>Нэвтрэх</Text>
//             </Button>
//           </Block>
//         </Block>
//       </LinearGradient>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   linearGradient: {
//     paddingHorizontal: '10%',
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%',
//   },

//   content: {
//     flex: 0,
//     backgroundColor: colors.white,
//     borderRadius: size.radius.lg,
//     marginHorizontal: size.space.md,
//     paddingHorizontal: size.space.sm,
//     paddingVertical: size.space.sm,
//     width: width / 2,
//     height: width / 2,
//   },
//   input: {
//     borderRadius: size.radius.sm,
//     backgroundColor: colors.background.primary,

//     height: width / 18,
//   },

//   TextInput: {
//     paddingHorizontal: size.space.sm,
//     paddingTop: size.space.sm,
//   },
//   title: {
//     fontSize: size.text.size.lg,
//     fontWeight: 'bold',
//     color: colors.black,
//     position: 'absolute',
//   },
// });

// export default App;
import React from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Block, Button} from '../../../../components';
import {colors, size} from '../../../../styles';
import LoginInput from '../../../../components/LoginInput';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import {Checkbox} from 'react-native-paper';
const {width} = Dimensions.get('screen');

export default function App() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  StatusBar.setHidden(true);
  return (
    <Block style={styles.container}>
      <Block style={styles.top}>
        <Block style={styles.box}>
          <Svg
            height={300}
            width={Dimensions.get('screen').width}
            viewBox="#FE0002"
            style={styles.topWavy}>
            <Path
              fill="#FE0002"
              d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
            <Block style={{flex: 0, alignItems: 'center', padding: 20}}>
              <Image
                source={require('../../../../../assets/PCmall-logo.png')}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  resizeMode: 'contain',
                }}
              />
            </Block>
          </Svg>
          <Block style={{alignItems: 'center', paddingTop: 50}}>
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
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  top: {},
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  box: {
    flex: 0,
    backgroundColor: '#FE0002',
    height: 80,
  },
  bottomWavy: {
    flex: 0,
    position: 'absolute',
    bottom: 20,
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
    paddingHorizontal: size.space.sm,
    paddingVertical: size.space.xl,
    width: width / 2,
    height: width / 1.8,
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
