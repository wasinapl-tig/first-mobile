import React from 'react';
import { Text, StyleSheet,Button,View ,TouchableOpacity} from 'react-native';


const HomeScreen = (props) => {
  // console.log(props);
  return (
<View>
<Text style={styles.text}> Home Screen </Text>

<Button  title="Navigate to ComponentScreen"
onPress={()=>props.navigation.navigate('Component')}
/>

<Button  title="Navigate to CounterScreen"
onPress={(()=>props.navigation.navigate('Counter'))}
/>

<Button  title="Navigate to ImageScreen"
onPress={(()=>props.navigation.navigate('Image'))}
/>
<Button  title="Navigate to ColorScreen"
onPress={(()=>props.navigation.navigate('Color'))}
/>
<TouchableOpacity></TouchableOpacity>
</View>
 
    );
};



const styles = StyleSheet.create({
text:{
  fontSize:30
  ,textAlign:"center"
}
});
 
export default HomeScreen;
