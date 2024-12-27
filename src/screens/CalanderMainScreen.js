import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '../assets/Index';
import {AppColors} from '../constants/AppColors';
import Nannies from './Nannies';
import Programs from './Programs';
import SelectedTime from './SelectedTime';

const CalendarMainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <SelectedTime />
        <Programs />
        <Nannies />
      </ScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <Button />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  content: {
    paddingLeft: 15,
  },
  footerContainer: {
    width: '100%',
    backgroundColor: AppColors.white,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: AppColors.borderColor,
    justifyContent: 'center',
    padding: 20,
  },
});

export default CalendarMainScreen;
