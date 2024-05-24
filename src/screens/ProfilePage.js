import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const ProfilePage = ({ navigation }) => {
  const userData = {
    nome: "Mikaias S. Santos",
    ocupacao: "Desenvolvedor de Software",
    experiencia: "Estudante universitário, apaixonado por tecnologia e inovação. Experiente em desenvolvimento front-end, prototipação e implementação de soluções inovadoras.",
    fotos: [
      require('../../assets/avatar-profile(1).png'),
      require('../../assets/avatar-profile(2).png'),
      require('../../assets/avatar-profile(3).png')
    ]
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 19,
    },
    fotoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    foto: {
      width: '100%',
      height: '100%',
      marginBottom: 5,
      marginTop: 15,
    },
    nome: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: '#253745',
      textAlign: 'center',
    },
    subinfo: {
      fontSize: 19,
      marginBottom: 10, // Adicionando margem inferior aqui
      color: '#4a5c6a',
      textAlign: 'center',
    },
    info: {
      fontSize: 18,
      marginBottom: 120, // Adicionando margem inferior aqui
      color: '#4a5c6a',
      textAlign: 'center',
    },
    
  });

  return (
    <View style={styles.container}>
      <Swiper autoplay={true} autoplayTimeout={5}>
        {userData.fotos.map((foto, index) => (
          <View key={index} style={styles.fotoContainer}>
            <Image source={foto} style={styles.foto} />
          </View>
        ))}
      </Swiper>
      <Text style={styles.nome}>{userData.nome}</Text>
      <Text style={styles.subinfo}>{userData.ocupacao}</Text>
      <Text style={styles.info}>{userData.experiencia}</Text>
    </View>
  );
};

export default ProfilePage;
