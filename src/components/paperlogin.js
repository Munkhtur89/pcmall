// const styles = StyleSheet.create({
//   input: {
//     borderWidth: size.border.width,
//     borderColor: colors.border.color,
//     borderRadius: size.borderRadius,
//     color: colors.black,
//     paddingVertical: Platform.OS === 'ios' ? 9 : 3,
//     paddingHorizontal: size.space.sm,
//     backgroundColor: colors.white,
//   },
//   label: {
//     textTransform: 'uppercase',
//   },
//   labelContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   full: {
//     // width: width - 50,
//   },
// });

// import React, {useState, useEffect, useRef} from 'react';
// import {colors, size} from '../styles';
// import {
//   StyleSheet,
//   ScrollView,
//   Image,
//   Dimensions,
//   View,
//   Text,
// } from 'react-native';
// import {TextInput, Button, Checkbox} from 'react-native-paper';
// import {Block} from '.';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const {width} = Dimensions.get('screen');

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [state, setState] = useState({
//     username: '',
//     password: '',
//   });
//   const [checked, setChecked] = useState(false);

//   const handleCheck = () => {
//     setChecked(!checked);
//   };
//   return (
//     <Block style={{flex: 0, paddingTop: size.space.xl}}>
//       <TextInput
//         label="Утасны дугаар"
//         autoCapitalize="none"
//         variant="rounded"
//         style={styles.input}
//         theme={{
//           colors: {
//             primary: colors.primaryDark,
//           },
//         }}
//       />
//       <TextInput
//         label="Нууц үг"
//         autoCapitalize="none"
//         variant="rounded"
//         error={state.errorPassword}
//         right={
//           <TextInput.Icon
//             icon={'eye-off-outline'}
//             color={colors.black}
//             style={{paddingTop: 20}}
//           />
//         }
//         theme={{
//           colors: {
//             primary: colors.primaryDark,
//           },
//         }}
//         returnKeyType="done"
//         style={styles.input}
//       />
//       <Block
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingTop: 10,
//           flex: 0,
//         }}>
//         <Checkbox.Android
//           status={checked ? 'checked' : 'unchecked'}
//           onPress={handleCheck}
//         />
//         <Text>Нэвтрэх нэр хадгалах</Text>
//       </Block>
//       <Block flex={0} style={styles.action}>
//         <Button
//           loading={loading}
//           disabled={loading}
//           type="contained"
//           mode="contained"
//           uppercase={false}
//           onPress={() => onSubmit()}
//           style={styles.button}>
//           Нэвтрэх
//         </Button>
//       </Block>
//     </Block>
//   );
// };

// const styles = StyleSheet.create({
//   formItem: {
//     flex: 0,
//   },

//   input: {
//     backgroundColor: colors.white,
//     paddingTop: size.space.xs,
//     fontSize: 20,
//   },
//   action: {
//     marginTop: 10,
//     height: size.space.xl,
//   },
//   button: {
//     backgroundColor: '#102441',
//     borderRadius: size.radius.base,
//   },
// });

// export default App;
