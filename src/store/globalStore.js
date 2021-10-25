import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers/reducers';

const persistedReducer = persistReducer({
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['UserReducer', 'ListReducer']
}, Reducers);

const Store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const Persistor = persistStore(Store);

export const getStore = () => Store;
export const getPersistor = () => Persistor;
