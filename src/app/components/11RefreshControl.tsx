import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native'
import { useState, useCallback } from 'react'

const RefControl = (): JSX.Element => {
    const [ refreshing, setRefreshing ] = useState(false)
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}/>
                }>
                
                <Text>Pull down</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    scrollView:{
        flex: 1,
        backgroundColor: '#467FD3',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RefControl
