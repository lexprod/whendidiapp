import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{props.text}</Text>
            <FontAwesome name="trash" size={20} color={'black'} />
            <View style={styles.timeBox}>
                <Text style={styles.timeTextNumber}>{props.timeNum}</Text>
                <Text style={styles.timeTextLabel}>days ago</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        margin: 5,
    },
    taskText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#212121',
        flex: 4,
        marginRight: 10
    },
    timeBox: {
        backgroundColor: '#B39DDB',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    timeTextNumber: {
        fontSize: 36,
        fontWeight: '900',
        color: '#212121',
        textAlign: 'center',
        margin: -10
    },
    timeTextLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#2d3436',
        textAlign: 'center',
    }
});


export default Task;