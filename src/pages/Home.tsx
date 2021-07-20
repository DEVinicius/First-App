import React, { useState } from 'react';
import { 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    Platform,
    FlatList,
    StatusBar
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export default function Home() {
    const [newSkill, setNewSkill] = useState<string>("");
    const [mySkills, setMySkills] = useState<string[]>([]);

    function handleAddSkill() {
        if(newSkill != "") {
            setMySkills(oldState => [...oldState, newSkill]);
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Hello, Ary Pereira</Text>
            <TextInput 
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button 
                handleAction={handleAddSkill}
            />

            <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>
            <FlatList 
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <SkillCard key={item} skill={item} />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#383443",
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "#1f1e25",
        color: "#fff",
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    }    
})