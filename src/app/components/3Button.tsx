import { Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native'

const Buttons = (): JSX.Element =>{
    return(
        <View style = {styles.container}>
            <View style={styles.button1}>
            <Button
                onPress={()=>{}}
                title='Submit'
                color='#000000'
                />
            </View>
            <View style = {styles.border}>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    button1:{
        flex: 0.2,
        height: '100%',
        width: '100%',
        backgroundColor: '#467FD3',
        borderRadius: 100,
        padding: 100
    },
    button2:{
        flex: 0.2,
        height: '100%',
        width: '50%',
        backgroundColor: '#467FD3',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 30,
        color: 'white'
    }
})

export default Buttons
