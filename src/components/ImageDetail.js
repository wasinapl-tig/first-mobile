import React from 'react';
import { Text, StyleSheet,Button,View ,TouchableOpacity,Image } from 'react-native';


const ImageDetail = props => {
console.log(props);

  return (
<View>
  {/* <Image source={require('../../assets/beach.jpg')} /> */}
  <Image source={props.imageSource} />
<Text style={styles.text}>  {props.title }</Text>
<Text>Image Score : {props.score}</Text>
</View>
 
    );
};



const styles = StyleSheet.create({
text:{
  fontSize:30
  ,textAlign:"center"
}
});
 
export default ImageDetail;
