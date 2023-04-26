import React, { useState, useRef, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const images = [
  require('../../assets/slider/img1.png'),
  require('../../assets/slider/img2.png'),
  require('../../assets/slider/img4.jpg'),
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const flatListRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
        flatListRef.current.scrollToIndex({ index: 0 });
      } else {
        setCurrentIndex(currentIndex + 1);
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const slideWidth = event.nativeEvent.layoutMeasurement.width;
          const currentIndex = event.nativeEvent.contentOffset.x / slideWidth;
          setCurrentIndex(currentIndex);
        }}
        ref={flatListRef}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View key={index} style={[styles.paginationDot, index === currentIndex ? styles.paginationDotActive : null]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 20,
    shadowColor: '#FFA500',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginTop:20,

  },
  imageContainer: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height * 0.32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default Slider;