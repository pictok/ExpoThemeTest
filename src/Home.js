import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./theme/themeContext";

const Home = () => {
    //copy to all screens so dark mode can work
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[
            { backgroundColor: theme.backgroundColor }]}>
            <Text style={[
                { color: theme.color }]}>Home Screen</Text>
            <Switch
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }} />
            <TouchableOpacity style={[
                { backgroundColor: theme.btn1}]}>
                    <Text style={[
                { color: theme.color }]}>Take Photo</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Home;