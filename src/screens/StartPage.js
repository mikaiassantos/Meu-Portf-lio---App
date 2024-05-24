import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartPage = ({ navigation }) => {
  const goToHomePage = () => {
    navigation.navigate('DrawerRoutes', { screen: 'Home' }); // Navegar para a tela "Home" dentro do DrawerRoutes
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu Aplicativo</Text>
      <Button title="Acessar Portfólio" onPress={goToHomePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default StartPage;

