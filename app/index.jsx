import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImg}
      resizedMode="cover"
      style={styles.image}
      >
      <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
      <Text>Coffee shop</Text>
    </View>
  )
}

export default app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image:{
width: '100%',
heght: '100%',
flex: 1,
resizeMode: 'cover',
justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeigth: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
})