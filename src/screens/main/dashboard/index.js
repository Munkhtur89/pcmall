import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple';

import {Block, Text, Divider} from '../../../components';
import {colors, size} from '../../../styles';
import Chart from './chart/progress';
import Barchart from './chart/bar';
import Porter from '../dashboard/porter';
const data = [
  {
    name: '1750',
    canceld: '12',
    driver: '14',
    car: 24,
  },
];

const AuthBefore = ({navigation}) => {
  return (
    <ScrollView>
      <Block style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <Block style={{flex: 0}}>
                <Block style={styles.box}>
                  <Block style={styles.item}>
                    <Text style={styles.data}>{item.name}</Text>
                    <Text style={styles.data}>{item.canceld}</Text>
                    <Text style={styles.data}>{item.driver}</Text>
                    <Text style={styles.data}>{item.car}</Text>
                  </Block>
                  <Block style={styles.item}>
                    <Text style={styles.itemName}>Хүргэгдсэн</Text>
                    <Text style={styles.itemName}>Цуцлагдсан</Text>
                    <Text style={styles.itemName}>Жолоож</Text>
                    <Text style={styles.itemName}>Машин</Text>
                  </Block>
                </Block>
                <Block>
                  <Chart />
                  <Barchart />
                  <Porter />
                </Block>
              </Block>
            );
          }}
        />
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.white,
  },

  item: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: colors.white,

    borderRadius: size.radius.xs,
    shadowColor: '#126ED7',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 21,
  },
  data: {
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 32,
  },
  itemName: {
    opacity: 0.3,
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
  },
});

export default AuthBefore;
