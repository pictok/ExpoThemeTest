import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { useState, useEffect } from 'react';

import Home from "./src/Home";
import themeContext from './src/theme/themeContext';
import theme from './src/theme/theme';

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    }
  }, [darkMode])

  return (
    <themeContext.Provider
      value={darkMode === true ? theme.dark : theme.light}>
      <View
        style={styles.container}
        value={darkMode === true ? theme.dark : theme.light}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Home />
      </View>
    </themeContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
});
