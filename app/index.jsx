import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
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

      <Link href= "/contact" style={{marginHorizontal:'auto'}} asChild>
      <Pressable style={styles.button}><Text style={styles.buttonText}>Contact Us</Text></Pressable>
      </Link>

      </ImageBackground>
      <Text style={{marginHorizontal:'auto'}}>Coffee Shop</Text>
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
    marginBottom: 115,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeigth: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 4,
  },

button:{
height: 60,
borderRadius: 20,
justifyContent: 'center',
backgroundColor: 'rgba(0,0,0,0.75)',
padding:6,

},
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeigth: 'bold',
    textAlign: 'center',
    padding: 4,
  }

})