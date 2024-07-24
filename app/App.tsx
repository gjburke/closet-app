import { StyleSheet } from 'react-native'
import { store } from './store'
import { Provider } from 'react-redux'
import MainNavigator from './navigators/MainNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
