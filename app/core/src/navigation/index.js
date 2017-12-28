// @flow

import * as React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { Color } from '@kiwicom/react-native-app-common';

import { configureStore } from '../services/redux/Store';
import TabBarIcon from '../components/navigation/TabBarIcon';

import ExploreStackNavigator from './ExploreStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import TripsStackNavigator from './TripsStackNavigator';

const MainTabNavigator = TabNavigator(
  {
    Explore: {
      screen: ExploreStackNavigator,
      navigationOptions: {
        tabBarIcon: function TabBarIconWrapper(props) {
          return <TabBarIcon type="Explore" {...props} />;
        },
      },
    },
    Trips: {
      screen: TripsStackNavigator,
      navigationOptions: {
        tabBarIcon: function TabBarIconWrapper(props) {
          return <TabBarIcon type="Trips" {...props} />;
        },
      },
    },
    Profile: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        tabBarIcon: function TabBarIconWrapper(props) {
          return <TabBarIcon type="Profile" {...props} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Explore',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Color.brand,
      showLabel: false,
    },
  },
);

const { persistor, store } = configureStore();

export default class Application extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainTabNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
