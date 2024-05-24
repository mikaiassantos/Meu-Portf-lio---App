import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import Contacts from '../screens/Contacts';
import AboutMe from '../screens/AboutMe'; // Importe a nova tela

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        activeTintColor: '#11212d',
        itemStyle: { marginVertical: 5 },
        labelStyle: { fontWeight: 'normal', fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="AboutMe"
        component={AboutMe}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="info" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="phone" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          drawerIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>OPÇÕES</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sobre"
        onPress={() => alert('Sobre este aplicativo')}
        icon={({ color, size }) => <Icon name="info-circle" color={color} size={size} />}
      />
      <DrawerItem
        label="Sair"
        onPress={() => alert('Botão de Sair pressionado')}
        icon={({ color, size }) => <Icon name="sign-out" color={color} size={size} />}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#11212d',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DrawerRoutes;
