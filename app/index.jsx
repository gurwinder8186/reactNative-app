import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImg}
      resizedMode="cover"
      style={styles.image}
      >
      <Text style={styles.title}>Coffee Shop</Text>
      <Link href= "/explore" style={styles.link}>Explore</Link>
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
  title: {
    color: 'white',
    fontSize: 42,
    fontWeigth: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeigth: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 4,
  }

})