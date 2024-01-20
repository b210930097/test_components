import React from "react"
import { View, Image, StyleSheet} from 'react-native'

const DisplayAnImage = (): JSX.Element => {
    return(
        <View style={styles.container}>

            <View style={styles.viewONE}>
                <View style={styles.viewBORDER}>
                    <Image
                        style={styles.imageSize}
                        source={require('../../../assets/favicon.png')}
                    />
                </View>
            </View>

            <View style={styles.viewTWO}>
                <View style={styles.viewBORDER}>
                    <Image
                        style={styles.imageSize}
                        source={{uri:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewONE:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height: '100%',
        width: '100%'
    },
    viewTWO:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: '100%',
        width: '100%'
    },
    imageSize:{
        height: 300,
        width: 300
    },
    viewBORDER:{
        borderWidth: 5,
        borderColor: "yellow"
    }
})
export default DisplayAnImage
