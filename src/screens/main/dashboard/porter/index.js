import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import {Block} from '../../../../components';
import {colors, size} from '../../../../styles';

const data = [
  {
    name: '2/50',
    canceld: 'Хан-уул',
    driver: '46-57 УАВ',
    car: 24,
  },
];
const index = () => {
  return (
    <Block style={styles.container}>
      <Block style={{flexDirection: 'row'}}>
        <Text style={styles.name}>Хүргэлт</Text>
        <Block style={{paddingLeft: '70%'}}>
          <Text style={styles.percent}>90%</Text>
        </Block>
      </Block>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Block style={styles.box}>
              <Block style={styles.item}>
                <Text style={styles.itemName}>Хүргэлт</Text>
                <Text style={styles.data}>{item.name}</Text>
                <Text style={styles.itemName}>Хүргэлт хийх дүүрэг</Text>
                <Text style={styles.data}>{item.canceld}</Text>
                <Text style={styles.itemName}>
                  Тээврийн хэрэгслийн мэдээлэл
                </Text>
                <Text style={styles.data}>{item.driver}</Text>
              </Block>
              <Block>
                <Image
                  source={require('../../../../../assets/Porter-01.png')}
                  resizeMode="contain"
                  style={{width: 300, height: 200}}
                />
              </Block>
            </Block>
          );
        }}
      />
    </Block>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.white,
  },

  item: {
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
  box: {
    flexDirection: 'row',
    padding: 20,
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
    fontWeight: 'bold',
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 32,
    color: colors.black,
  },
  itemName: {
    opacity: 0.7,
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
    marginTop: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.black,
    paddingLeft: 20,
  },
  percent: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.danger,
  },
});
