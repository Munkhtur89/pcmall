import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Switch,
} from 'react-native';
import {color} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors, size} from '../../styles';
import {Block} from '../../components';

const index = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Block style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            alt=""
            source={require('../../../assets/PCmall-logo.png')}
            resizeMode="contain"
            style={styles.profileAvatar}
          />
        </Block>
        <Block style={styles.section}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={styles.row}>
            <Block style={styles.rowIcon}>
              <AntDesign color="#666d7b" name="layout" size={28} />
              <Text style={styles.rowLabel}>Хянах самбар</Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Delivery')}
            style={styles.row}>
            <Block style={styles.rowIcon}>
              <AntDesign color="#666d7b" name="layout" size={28} />
              <Text style={styles.rowLabel}>Хүргэлтийн мэдээлэл</Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Management')}
            style={styles.row}>
            <Block style={styles.rowIcon}>
              <AntDesign color="#666d7b" name="layout" size={28} />
              <Text style={styles.rowLabel}>Удирдлага</Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.row}>
            <Block style={styles.rowIcon}>
              <AntDesign color="#6B7280" name="layout" size={28} />
              <Text style={styles.rowLabel}>Тохиргоо</Text>
            </Block>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    paddingTop: size.space.xl,
    maxWidth: 300,
    backgroundColor: '#363740',
    flex: 1,
  },
  section: {
    paddingTop: size.space.xl,
    paddingLeft: size.space.md,
    flex: 1,
  },

  profileAvatar: {
    width: 200,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: size.space.xxl,
  },
  rowIcon: {
    width: size.icon.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    paddingTop: 20,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6B7280',
    paddingLeft: size.space.xs,
  },
});
