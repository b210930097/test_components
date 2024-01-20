import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Views = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.viewONE}>
                <View style={styles.viewONETWO}></View>
            </View>
            <View style={styles.viewTWO}>
            <View style={styles.viewTWOTWO}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewONE:{
        flex: 0.5,
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTWO:{
        flex: 0.5,
        backgroundColor: 'red',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewONETWO:{
        flex: 0.2,
        backgroundColor: 'green',
        height: 100,
        width: 100
    },
    viewTWOTWO:{
        flex: 0.2,
        backgroundColor: 'green',
        height: 100,
        width: 100
    }

})
export default Views
