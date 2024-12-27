import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconCheck} from '../assets/Index';
import {AppColors} from '../constants/AppColors';
import Fonts from '../constants/fonts';
import Typography from '../constants/Typography';
import {dpFont, dpHeight, dpWidth} from '../utilities/SizeInDp';
import {PROGRAM_DATA} from './RawData';

const Programs = () => {
  const [selectedId, setSelectedId] = useState(56765);

  const handlePress = id => {
    setSelectedId(id);
  };

  const programItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handlePress(item.id)}
      style={styles.programCard}>
      <View>
        <View style={styles.headerRow}>
          <View style={styles.durationRow}>
            <Text style={styles.durationText}>{item.durationStart} - </Text>
            <Text style={styles.durationText}>{item.durationEnd}</Text>
          </View>
          <View style={styles.icon}>
            {selectedId === item.id && <IconCheck />}
          </View>
        </View>
        <Text style={[styles.labelText, styles.marginTop]}>{item.label}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text
          style={[Typography.Medium16, {color: '#666666', marginBottom: -5}]}>
          Price
        </Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        <Text style={styles.heading}>Programs</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={PROGRAM_DATA}
        horizontal
        renderItem={programItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.Medium,
    color: AppColors.black,
    fontSize: dpFont(16),
    marginTop: dpHeight(8),
  },
  programCard: {
    width: dpWidth(130),
    backgroundColor: AppColors.borderColor,
    borderWidth: 1,
    padding: 10,
    borderColor: '#EFEFF4',
    borderRadius: 20,
    marginRight: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  durationRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  durationText: {
    color: '#666666',
    fontFamily: Fonts.Medium,
    fontSize: dpFont(12),
  },
  icon: {
    width: 22,
    height: 22,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  labelText: {
    ...Typography.Medium16,
    fontSize: dpFont(16),
    color: AppColors.black,
  },
  marginTop: {
    marginTop: 9,
  },
  timeText: {
    ...Typography.Medium16,
    fontSize: dpFont(13),
    color: AppColors.black,
  },
  priceContainer: {
    marginTop: 20,
  },
  priceText: {
    fontSize: dpFont(20),
    color: AppColors.black,
    fontFamily: Fonts.SemiBold,
  },
});

export default Programs;
