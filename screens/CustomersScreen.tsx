import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'

const customersScreen = () => {
    const tw = useTailwind;
    return (
        <SafeAreaView>
            <Text>customersScreen</Text>
        </SafeAreaView>
    )
}

export default customersScreen