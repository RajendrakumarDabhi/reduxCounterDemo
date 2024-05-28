import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const Headerright = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.onClick()}
    >
      <Text style={styles.buttonText}>Add Note</Text>
    </TouchableOpacity>
  )
}


export default Headerright

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginEnd:14
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });