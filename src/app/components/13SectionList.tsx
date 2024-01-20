import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar
} from 'react-native'

const DATA =[
    {
        title: 'СОНГОЛТ 1',
        data: ['A', 'B', 'C']
    },
    {
        title: 'СОНГОЛТ 2',
        data: ['a', 'b', 'c']
    },
    {
        title: 'СОНГОЛТ 3',
        data: ['Aa', 'Bb', 'Cc']
    }
]

const sectionList = (): JSX.Element => {
    return(
        <SafeAreaView>
            <SectionList 
                sections={DATA}
                
            />
        </SafeAreaView>
    )   
}
