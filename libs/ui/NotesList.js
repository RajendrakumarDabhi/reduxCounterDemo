import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import ListItem from './ListItem'
const NotesList = () => {

    var listNotes = [
        { id: 1, title: 'Note 1', content: 'This is note 1' },
        { id: 2, title: 'Note 2', content: 'This is note 2' },
        { id: 3, title: 'Note 3', content: 'This is note 3' },
        { id: 4, title: 'Note 4', content: 'This is note 4' },
    ]

    function renderItem(item) {
        var data = item.item
        const dataItem = { id: data.id, title: data.title, content: data.content }
        return <ListItem {...dataItem} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={listNotes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            >
            </FlatList>
        </View>
    )
}

export default NotesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})