import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { AppColors } from '../../constants/AppColors'

const Headerright = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.onClick("AddNote")}
      >
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/13408/13408949.png' }}
          style={{ width: 24, height: 24 }} tintColor={AppColors.red}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.onClick("Userlist")}
      >
        <Image source={{ uri: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' }}
          style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    </View>
  )
}


export default Headerright

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginEnd: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});