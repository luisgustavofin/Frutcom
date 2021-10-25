import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';
import { getStore, getPersistor } from './src/store/globalStore';
import { Colors } from './src/utils';

const store = getStore();
const persistor = getPersistor();
const Navegador = createAppContainer(MainNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Navegador />
      </PersistGate>
    </Provider>
  );
}
