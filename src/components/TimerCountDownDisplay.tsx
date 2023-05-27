import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {
    timerDate: Date;
}

export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate }) => {
    return (<View>
        <Text style={styles.TimerCountDownText}>{timerDate.getMinutes().toString().padStart(2, "0")}:{timerDate.getSeconds().toString().padStart(2, "0")}</Text>
    </View>)
}

const styles = StyleSheet.create({
    TimerCountDownText:{
        fontSize:40,
        fontWeight: '800',
        color: '#F1F1F1'
    }
})