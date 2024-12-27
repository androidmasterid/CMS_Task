import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../constants/AppColors';
import Typography from '../constants/Typography';

const SelectedTime = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={[Typography.Medium13, styles.startText]}>Start</Text>
        <Text style={[Typography.Semibold16, styles.timeText]}>8:00 AM</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={[Typography.Medium13, styles.startText]}>End</Text>
        <Text style={[Typography.Semibold16, styles.timeText]}>12:00 PM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '47%',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EFEFF4',
    backgroundColor: AppColors.borderColor,
  },
  startText: {
    color: '#666666',
  },
  timeText: {
    color: AppColors.black,
  },
});

export default SelectedTime;
