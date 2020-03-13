import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.userDateContainer}>
        <Text style={styles.username}>Mtoff</Text>
        <Text style={styles.date}>3/12/20</Text>
      </View>
      <Text>This is my paragraph and it should be more than one line
        so I will keep typing. This is my paragraph and it should be more
        than one line so I will keep typing
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderColor: '#d6d7da',
    borderWidth: 1
  },
  userDateContainer: {

  },
  username: {
    fontSize: 20
  },
  date: {

  }
})
