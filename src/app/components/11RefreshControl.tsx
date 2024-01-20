// import {
//     RefreshControl,
//     SafeAreaView,
//     ScrollView,
//     StyleSheet,
//     Text
// } from 'react-native'
// import { useState, useCallback } from 'react'

// const RefControl = (): JSX.Element => {
//     const [ refreshing, setRefreshing ] = useState(false)
//     const onRefresh = useCallback(() => {
//         setRefreshing(true)
//         setTimeout(() => {
//             setRefreshing(false)
//         }, 2000)
//     }, [])
//     return(
//         <SafeAreaView>
//             <ScrollView>
//                 <RefreshControl 
//                     refreshing={RefreshControl}
//                 />
//                 <Text></Text>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({

// })

// export default RefControl
