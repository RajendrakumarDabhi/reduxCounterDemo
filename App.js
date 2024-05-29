import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesList from './libs/ui/NotesList';
import AddNote from './libs/ui/AddNote';
import { Button } from 'react-native-web';
import Toolbar from './libs/ui/common/Toolbar';
import Headerright from './libs/ui/common/Headerright';
import { Provider } from 'react-redux';
import store from './libs/redux/store';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NotesList" component={NotesList}
          options={({ navigation }) => ({
            headerTitle: () => (<Toolbar title="Notes List" />),
            headerRight: () => (<Headerright onClick={
              () => navigation.navigate('AddNote')
            } />),
          })}
        />
        <Stack.Screen name="AddNote" component={AddNote} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
