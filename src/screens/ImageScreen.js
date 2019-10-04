import React from 'react';
import { Text, StyleSheet ,View} from 'react-native';
import ImageDetail from '../components//ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest"  imageSource={require('../../assets/forest.jpg')}
      score={9}
      />
      <ImageDetail title="Beach"   imageSource={require('../../assets/beach.jpg')}
          score={10}
      />
     
      <ImageDetail title="Moutain"  imageSource={require('../../assets/mountain.jpg')}
         score={-5}
     />

      {/* <ImageDetail title="Forest"  />
      <ImageDetail title="Beach"  />
      <ImageDetail title="Moutain"  /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
