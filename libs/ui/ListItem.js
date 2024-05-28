import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../constants/Colors'

function ListItem({ title, content }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textdesc}>{content}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({

  itemContainer: {
    margin: 4,
    width: '95%',
    margin: 8,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: AppColors.background,
    padding: 12
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  textdesc: {
    fontSize: 14,
  }
})