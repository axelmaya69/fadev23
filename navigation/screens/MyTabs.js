import * as React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NosotrosScreen from './NosotrosScreen';
import FestivalScreen from './FestivalScreen';
import HorarioScreen from './HorarioScreen';
import ContactoScreen from './ContactoScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Nosotros" component={NosotrosScreen} />
      <Tab.Screen name="Festival" component={FestivalScreen} />
      <Tab.Screen name="Horario" component={HorarioScreen} />
      <Tab.Screen name="Contacto" component={ContactoScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;