import { createStackNavigator } from '@react-navigation/stack';
import Projects from '../screens/Projects'; // Certifique-se de que o caminho está correto
import ProjectDetailsPage from '../screens/ProjectDetailsPage'; // Importe corretamente o ProjectDetailsPage

const Stack = createStackNavigator();

const ProjectsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetailsPage}
        options={({ route }) => ({ headerTitle: route.params.project.name })}
      />
    </Stack.Navigator>
  );
};

export default ProjectsStack;
