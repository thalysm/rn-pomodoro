import React from "react";
import { Text, View, StyleSheet } from "react-native";

export type TimerModes = "Focus" | "Break";
type Props ={
    timerMode: TimerModes;
}


export const TimerModeDisplay: React.FC<Props> = ({timerMode}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timerModeText}>{timerMode=='Focus'? 'Tempo para focar':'Tempo para descansar'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: '100%',
    },
    timerModeText:{
        fontSize:20,
        fontWeight: '800',
        color: '#F1F1F1'
    }
})