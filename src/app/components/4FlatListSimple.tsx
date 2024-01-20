import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native'

const DATA = [
    {
      id: '1a1a',
      title: 'TUGU',
    },
    {
      id: '2b2b',
      title: 'NBA',
    },
    {
      id: '3c3c',
      title: 'SOGI',
    },
  ]
  
type ItemProps = {title: string}

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const FL_simple = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default FL_simple
