import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import ProjectDetailsPage from './ProjectDetailsPage';

const Stack = createStackNavigator();

const projects = [
  { id: 1, name: 'TrendTrove', url: 'https://produtos-trendtrove.netlify.app/', image: require('../../assets/project(1).jpg') },
  { id: 2, name: 'RapidRecip', url: 'https://rapid-recipv3.netlify.app/', image: require('../../assets/project(2).jpg') },
  { id: 3, name: 'Cardápio Digital', url: 'https://cardapio-cafeteria-senac-pe.netlify.app/', image: require('../../assets/project(3).jpg') },
  { id: 4, name: 'Starbucks®', url: 'https://starbucks-landing-page.netlify.app/', image: require('../../assets/project(04).jpg') },
];

const Projects = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {projects.map((project) => (
        <TouchableOpacity
          key={project.id}
          style={styles.projectBox}
          onPress={() => navigation.navigate('ProjectDetails', { project })}
        >
          <ImageBackground source={project.image} style={styles.imageBackground}>
            <View style={styles.overlay}>
              <Text style={styles.projectText}>{project.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const ProjectsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projects" component={Projects} options={{ headerShown: false }} />
      <Stack.Screen 
        name="ProjectDetails" 
        component={ProjectDetailsPage} 
        options={({ route }) => ({ headerTitle: route.params.project.name })} 
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  projectBox: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default () => (
  <NavigationContainer independent={true}>
    <ProjectsStack />
  </NavigationContainer>
);




