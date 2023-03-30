import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Provider, Appbar} from 'react-native-paper';
import {ProgressChart} from 'react-native-chart-kit';

const MyWebtutsComponent = () => {
  const data = {
    labels: ['Laravel', 'PHP', 'html', 'javascript'], // optional
    data: [0.4, 0.7, 0.8, 0.4],
  };

  return (
    <Provider>
      <View style={styles.mainbox}>
        <ProgressChart
          data={data}
          width={340}
          height={220}
          strokeWidth={6}
          radius={32}
          chartConfig={{
            backgroundColor: '#218838',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#e2e2e2',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(13, 136, 56, ${opacity})`,
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
