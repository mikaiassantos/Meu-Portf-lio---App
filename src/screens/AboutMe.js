import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const AboutMe = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/About.jpg')} style={styles.image} />
      </View>
      <Animated.View style={[styles.whiteBox, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Sobre Mim</Text>
        <Text style={styles.description}>
          Olá, sou Mikaias, um jovem entusiasta de 19 anos, apaixonado por tudo que envolve criatividade, modernidade e tecnologia! 
          Fora do âmbito profissional, me divirto desenhando, explorando minha criatividade na cozinha para criar doces para minha 
          família e amigos próximos, e mergulhando em filmes e séries de época. Sou apaixonado por viajar, adoro a atmosfera calorosa 
          e festiva. Em tudo que me proponho a fazer, procuro a melhor forma de fazer bem feito e agradável. Sou um pouco perfeccionista. 
          Eu amo a ciência e a natureza, encontrando inspiração em todos os aspectos da vida.
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    height: '60%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  whiteBox: {
    position: 'absolute',
    top: '34%',
    bottom: '0%',
    left: '15%',
    right: '0%',
    width: 360,
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    padding: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 19,
    fontFamily: 'Times New Roman',
  },
  description: {
    color: '#f5f5f5',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Times New Roman',
  },
});

export default AboutMe;
