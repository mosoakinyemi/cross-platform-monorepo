import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts} from '../constants';
import {isMobile} from '../utils';

export default function Tile({title, description, image}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image || 'https://via.placeholder.com/150x120?text=No+Image',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={isMobile ? 2 : 3}>
          {title || 'Article Title Here'}
        </Text>
        <Text style={styles.description} numberOfLines={isMobile ? 4 : 3}>
          {description || 'Article story Here'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: fonts.small,
    flexWrap: 'wrap',
  },
  title: {
    marginBottom: 10,
    fontSize: fonts.medium,
  },
  textContainer: {
    width: isMobile ? '55%' : '70%',
  },
  image: {
    height: isMobile ? 120 : 150,
    width: isMobile ? 150 : 300,
    marginRight: isMobile ? 10 : 30,
    backgroundColor: '#efefef',
  },
  container: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: 'black',
    marginHorizontal: 10,
  },
});
