import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProjectDetailsPage = ({ route }) => {
  const { project } = route.params;

  // URLs do GitHub para cada projeto
  const githubUrls = {
    1: 'https://github.com/mikaiassantos/TrendTrove-Store',
    2: 'https://github.com/mikaiassantos/RapidRecip---App',
    3: 'https://github.com/mikaiassantos/digitalmenu',
    4: 'https://github.com/mikaiassantos/Starbucks-Page/tree/main',
  };

  // Função para renderizar a descrição do projeto
  const renderDescription = () => {
    let description = '';
    switch (project.id) {
      case 1:
        description = "TrendTrove é uma loja online que oferece uma experiência de compra intuitiva e eficiente. Desenvolvi um site de controle de compras de carrinho onde os usuários podem navegar por uma variedade de produtos, adicionando os itens desejados ao carrinho de compras. O carrinho de compras exibe uma lista detalhada dos produtos selecionados, incluindo o preço individual de cada item e o valor total da compra. Utilizei as seguintes ferramentas para desenvolver TrendTrove: HTML, CSS, JavaScript e Bootstrap. Essas tecnologias permitiram criar uma interface moderna, responsiva e fácil de usar.";
        break;
      case 2:
        description = "RapidRecip é um aplicativo inovador de receitas, ainda em desenvolvimento, atualmente disponível como um Progressive Web App (PWA). O objetivo do RapidRecip é proporcionar aos usuários acesso a receitas fáceis e rápidas de preparar. Estou focado em tornar o aplicativo uma ferramenta indispensável para quem busca praticidade na cozinha, com uma interface amigável e funcionalidades que facilitam a busca e o preparo de receitas. Os usuários poderão salvar suas receitas favoritas, acessar listas de ingredientes e seguir instruções passo a passo.";
        break;
      case 3:
        description = "O projeto é o desenvolvimento de um cardápio digital para uma cafeteria. Este cardápio online permite que os clientes explorem as opções de alimentos e bebidas oferecidos pela cafeteria de maneira interativa e atrativa. O design do cardápio foi pensado para ser visualmente agradável e funcional, facilitando a navegação pelos diferentes itens. A interface é responsiva, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops. Este projeto foi criado utilizando HTML, CSS e JavaScript para garantir uma apresentação elegante e uma navegação intuitiva.";
        break;
      case 4:
        description = "ProStarbucks é o meu primeiro projeto desenvolvido com HTML e CSS! Este projeto foi criado como parte do meu aprendizado inicial em desenvolvimento web. Ao projetar esta página, busquei transmitir não apenas a estética visual característica da Starbucks, mas também oferecer uma experiência envolvente aos visitantes. Com um design limpo e moderno, a página apresenta elementos familiares aos fãs da marca, como as cores icônicas e a tipografia marcante. Este projeto representa o início da minha jornada no mundo do desenvolvimento web e o meu compromisso em aprender e evoluir constantemente nesta área fascinante.";
        break;
      default:
        description = '';
    }
    return description;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={project.image} style={styles.image} />
        <Text style={styles.title}>{project.name}</Text>
        <Text style={styles.description}>{renderDescription()}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(project.url)}>
          <Text style={styles.buttonText}>Acessar Site</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.githubButton} onPress={() => Linking.openURL(githubUrls[project.id])}>
          <Icon name="github" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100, // Espaço para o botão fixo
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#253745',
  },
  description: {
    fontSize: 18,
    color: '#4a5c6a',
  },
  buttonContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#11212d',
    padding: 15,
    borderRadius: 10,
    marginRight: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  githubButton: {
    width: 51,
    height: 51,
    backgroundColor: '#11212d', // Cor vinho
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProjectDetailsPage;

