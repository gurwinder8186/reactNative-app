import { Colors } from '@/constants/Colors'
import MENU_IMAGES from '@/constants/MenuImages'
import { MENU_ITEMS } from '@/constants/MenuItems'
import {
  Appearance,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const styles = createStyles(theme, colorScheme)
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  )
}

function createStyles(theme, colorSchemes) {
  return StyleSheet.create({
    contentContainer:{
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background, 
    }
  })
}
