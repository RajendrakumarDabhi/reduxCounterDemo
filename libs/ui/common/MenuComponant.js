// MenuComponent.js
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const MenuComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger>
          <TouchableOpacity style={styles.threeDots}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert('Option 1')}>
            <Text style={styles.menuText}>Option 1</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert('Option 2')}>
            <Text style={styles.menuText}>Option 2</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  threeDots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 20,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: 'black',
    margin: 1,
  },
  menuText: {
    padding: 10,
  },
});

export default MenuComponent;
