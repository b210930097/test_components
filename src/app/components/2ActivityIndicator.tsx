import {ActivityIndicator, StyleSheet, View} from 'react-native'

const AcIndicator = () => (
  <View style={styles.horizontal}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
)

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

export default AcIndicator
