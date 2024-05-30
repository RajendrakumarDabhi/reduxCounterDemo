import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../redux/reducer/notesSlice'
const NotesList = () => {
    var listNotes = useSelector((state) => state.notes.notes)

    var dispatch=useDispatch()
    function onClickedDelete(id){
        console.log("delete clicked", id)
        dispatch(removeNote(id))
    }

    function renderItem(item) {
        var data = item.item
        const dataItem = { 
            id: data.id,
            title: data.title, 
            content: data.content,
            onClickedDelete
         }
        return <ListItem {...dataItem} />
    }

    return (
        <View style={styles.container}>
            {listNotes.length>0 ? (
                <FlatList
                    data={listNotes}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text style={styles.noNotes}>No Notes Found ({listNotes.length})</Text>)
            }


        </View>
    )
}

export default NotesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noNotes: {
        flex:1,
        marginStart:24,
        fontSize: 14,
        width:'100%',
        height:'100%',
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center',
    }

})