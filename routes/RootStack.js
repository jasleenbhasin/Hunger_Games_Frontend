import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import List from '../screens/mainList';
import Dairy from '../screens/Dairy';
import IngredientList from '../screens/IngredientList';

const RootStack = createStackNavigator({
    List: { screen: List },
    Dairy: { screen: Dairy },
    IngredientList: { screen: IngredientList },
});

export default createAppContainer(RootStack);
