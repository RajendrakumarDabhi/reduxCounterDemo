import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AppColors } from '../constants/AppColors';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/reducer/notesSlice';

const AddNote = (navigation) => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');

  var dispatch = useDispatch()

  const handleSubmit = () => {
    const data = {
      id:Math.floor(Math.random() * 1000),
      title: title,
      content: desc
    }
    dispatch(addNote(data))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Note</Text>
      <TextInput
        style={styles.input}
        placeholder="enter Note title"
        value={title}
        onChangeText={settitle}
      />
      <TextInput
        style={styles.input}
        placeholder="enter Note description"
        value={desc}
        onChangeText={setdesc}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: AppColors.background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: AppColors.primary,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: AppColors.text,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: AppColors.background,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: AppColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: AppColors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddNote;