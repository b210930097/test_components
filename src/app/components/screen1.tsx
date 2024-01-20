import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const screen1 = (): JSX.Element => {
    return(
        <View>
            <Text>2/4 steps</Text>
            <View>

            </View>
            <Text>Your fitness routine</Text>
            <Text>What sports do you do?</Text>

            <View>

            </View>

            <Text>
                Select periodicity:
            </Text>

            <View>
                <Text>M</Text>
                <Text>T</Text>
                <Text>W</Text>
                <Text>T</Text>
                <Text>F</Text>
                <Text>S</Text>
                <Text>S</Text>
            </View>

            <Text>Next</Text>
            <Text>Skip this step</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default screen1
