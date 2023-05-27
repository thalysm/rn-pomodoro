import React from "react";
import {StyleSheet, Pressable, View} from "react-native";

import { Play,Pause } from "react-native-feather";

type Props = {
    isTimerRunning: boolean;
    stopTimer: () => void;
    startTimer: () => void;
};

export const TimerToggleButton: React.FC<Props> = ({isTimerRunning,stopTimer,startTimer}) => {
    return (
        <Pressable onPress={isTimerRunning? stopTimer: startTimer}>
            <View style={styles.container}>
                {isTimerRunning?<Pause stroke="#FE5050" width={125} height={125} style={styles.icon}/>:<Play style={styles.icon} stroke="#5093FE" width={125} height={125} />}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon:{alignSelf:"center",
    },
    container: {
        borderWidth: 5,
        width: 250,
        height: 250,
        borderRadius: 250/2,
        justifyContent: "center",
        borderColor: '#252831',
        marginVertical: 50
    }
})