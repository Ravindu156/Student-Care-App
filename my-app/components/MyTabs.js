import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Course from './Course';
import Profile from './Profile';
import Subject from './Subject';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs({ route }) {
    const { user } = route.params;
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconSource;
    
              if (route.name === 'Profile') {
                iconSource = require('../assets/icons/profile.png');
              } else if (route.name === 'Course') {
                iconSource = require('../assets/icons/course.png');
              } else if (route.name === 'Subject') {
                iconSource = require('../assets/icons/subjects.png');
              }
    
              return (
                <Image
                  source={iconSource}
                  style={[
                    styles.icon,
                    { tintColor: focused ? '#4b0150' : '#aaa' },
                  ]}
                />
              );
            },
            tabBarActiveTintColor: '#4b0150', 
            tabBarInactiveTintColor: '#aaa', 
          })}
        >
            <Tab.Screen name="Profile" component={Profile} initialParams={{ user }} />
            <Tab.Screen name="Course" component={Course} initialParams={{ user }} />
            <Tab.Screen name="Subject" component={Subject} initialParams={{ user }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });