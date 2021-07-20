import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

interface ISkill {
    skill:string;
}

export function SkillCard({skill}:ISkill) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill} >{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: "#1f1e25",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        marginVertical: 10
    },
    textSkill: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    }
})