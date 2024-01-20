import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Alert
} from 'react-native'
import {useState} from 'react'

const handler = (Username: string): void =>{
    Alert.alert(Username)
}

const KeyAvoidView = (): JSX.Element => {
    const [name, setName] = useState('')
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Header</Text>
                    <TextInput 
                    value={name}
                    onChangeText = {(text) => {setName(text)}}
                    placeholder='Username' 
                    style={styles.textInput}/>
                    <View style={styles.btnContainer}>
                        <Button title='Submit' onPress={() => {handler(name)}}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    inner:{
        padding: 24,
        flex: 1,
        justifyContent: 'space-around'
    },
    header:{
        fontSize: 36,
        marginBottom: 48
    },
    textInput:{
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom:36
    },
    btnContainer:{
        backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: 12,
    }
})

export default KeyAvoidView
