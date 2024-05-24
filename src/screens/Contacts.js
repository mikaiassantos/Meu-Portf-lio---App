import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactsPage = () => {
  return (
    <ImageBackground source={require('../../assets/contact-layout.jpg')} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Contatos</Text>
        <View style={styles.contactsContainer}>
          <TouchableOpacity style={styles.contactContainer} onPress={() => Linking.openURL('mailto:mikaiassantos28@gmail.com')}>
            <Icon name="email" size={30} color="#FFFFFF" />
            <Text style={styles.contactContent}>mikaiassantos28@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactContainer} onPress={() => Linking.openURL('https://wa.me/5581989569444')}>
            <Icon name="whatsapp" size={30} color="#FFFFFF" />
            <Text style={styles.contactContent}>(81) 98956-9444</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactContainer} onPress={() => Linking.openURL('https://www.linkedin.com/in/mikaias-da-silva-santos-b3a5ab226')}>
            <Icon name="linkedin" size={30} color="#FFFFFF" />
            <Text style={styles.contactContent}>Mikaias da Silva Santos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactContainer} onPress={() => Linking.openURL('https://www.instagram.com/mikaiassantos_/')}>
            <Icon name="instagram" size={30} color="#FFFFFF" />
            <Text style={styles.contactContent}>@mikaiassantos_</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  contactsContainer: {
    marginBottom: 80,
    width: 350,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 25,
    width: '100%',
    maxWidth: 350,
  },
  contactContent: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 15,
  },
});

export default ContactsPage;
