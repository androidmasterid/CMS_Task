import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconCheck, StarIcon} from '../assets/Index';
import Fonts from '../constants/fonts';
import Typography from '../constants/Typography';
import {dpFont, dpHeight, dpWidth} from '../utilities/SizeInDp';
import {NANNIES_DATA} from './RawData';

const Nannies = () => {
  const [selectedId, setSelectedId] = useState(65475);

  const handlePress = id => {
    setSelectedId(id);
  };

  const NanniesItem = ({item, index}) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.7}
      onPress={() => handlePress(item.id)}
      style={styles.nannyItemContainer}>
      <View style={styles.nannyImageContainer}>
        <Text style={styles.imagePlaceholder}>64 x 64</Text>
        <Image
          source={{
            uri: item.profile || '',
          }}
          style={styles.nannyImage}
          resizeMode="cover"
        />
      </View>
      {selectedId === item.id && (
        <View style={styles.iconCheckContainer}>
          <IconCheck />
        </View>
      )}
      <Text numberOfLines={2} style={styles.nannyLabel}>
        {item.label}
      </Text>
      <View style={styles.ratingContainer}>
        <StarIcon />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Nannies</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>{'See all >'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={NANNIES_DATA}
        horizontal
        renderItem={NanniesItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: dpWidth(10),
    alignItems: 'center',
    //  backgroundColor: 'red',
    marginTop: dpHeight(16),
  },
  heading: {
    fontFamily: Fonts.Medium,
    color: '#000',
    fontSize: dpFont(16),
  },
  seeAllText: {
    color: '#8A8A8F',
    //  top: dpWidth(4),
    fontSize: dpFont(13),
  },
  nannyItemContainer: {
    width: dpWidth(80),
    marginRight: 10,
    marginTop: dpWidth(15),
    alignItems: 'center',
  },
  nannyImageContainer: {
    width: dpWidth(70),
    height: dpWidth(70),
    borderRadius: 100,
    backgroundColor: '#C8C7CC',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#8A8A8F',
    fontFamily: Fonts.Medium,
    fontSize: dpFont(15),
  },
  nannyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  iconCheckContainer: {
    top: dpWidth(-3),
    right: dpWidth(12),
    position: 'absolute',
  },
  nannyLabel: {
    ...Typography.Medium16,
    color: '#000',
    width: '80%',
    textAlign: 'center',
    marginTop: dpWidth(8),
    marginBottom: dpWidth(4),
  },
  ratingContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    color: '#8A8A8F',
    fontSize: dpFont(14),
  },
});

export default Nannies;
