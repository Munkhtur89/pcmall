import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Provider, Appbar} from 'react-native-paper';
import {StackedBarChart} from 'react-native-chart-kit';
import {colors} from '../../../../../styles';
const MyWebtutsComponent = () => {
  const data = {
    labels: ['Item1', 'Item2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#F2E96D', '#E9D40B', '#B6AB0E'],
  };

  return (
    <Provider>
      <View style={styles.mainbox}>
        <StackedBarChart
          data={data}
          width={350}
          height={220}
          strokeWidth={16}
          radius={20}
          chartConfig={{
            backgroundColor: '#218838',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `red`,
            labelColor: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#218838',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            padding: 10,
            borderColor: colors.border.color,
            borderWidth: 2,
            margin: 20,
          }}
          hideLegend={false}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  mainbox: {
    textAlign: 'center',
    margin: 15,
    justifyContent: 'space-between',
  },
});
export default MyWebtutsComponent;
