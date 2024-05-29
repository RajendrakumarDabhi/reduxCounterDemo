import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../constants/AppColors'
function ListItem({ id, title, content, onClickedDelete }) {

  function onDelete() {
    onClickedDelete(id)
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemrowContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textdesc}>{content}</Text>
      </View>
      <Button title='delete' style={styles.deletebutton} onPress={onDelete} color={AppColors.primary} />
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
    padding: 12,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  itemrowContainer: {
    flexDirection: 'column'
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  textdesc: {
    fontSize: 14,
  },
  deletebutton: {
    color: AppColors.primary,
    borderColor: AppColors.primary
  }, 
  image: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 20,
  },
})