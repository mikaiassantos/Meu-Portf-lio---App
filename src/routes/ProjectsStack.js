import { createStackNavigator } from '@react-navigation/stack';
import Projects from '../screens/Projects'; // Certifique-se de que o caminho está correto
import ProjectDetailsPage from '../screens/ProjectDetailsPage'; // Importe corretamente o ProjectDetailsPage

const Stack = createStackNavigator();

const ProjectsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailsPage} />
    </Stack.Navigator>
  );
};

export default ProjectsStack;
