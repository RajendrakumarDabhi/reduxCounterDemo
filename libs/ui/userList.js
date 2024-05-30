import { StyleSheet, Text, View, FlatList, Button, Touchable, Pressable, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../redux/reducer/notesSlice'
import { deleteUser, getUsers } from '../redux/reducer/usersSlice'
const userList = () => {
    const screenStates = useSelector((state) => state)

    var dispatch = useDispatch()
    function onClickFetch() {
        dispatch(getUsers())
    }

    function onClickedDelete(id) {
        dispatch(deleteUser(id))
    }

    function renderItem(item) {
        var data = item.item
        console.log(data)
        const dataItem = {
            id: data.id,
            title: data.name,
            content: data.email,
            onClickedDelete
        }
        return <ListItem {...dataItem} />
    }

    return (
        <View style={styles.container}>
            <Pressable title='Fetch Data' onPress={onClickFetch} style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Image source={{ uri: 'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-cloud-computing-concept-sync-icon-vector-illustration-png-image_315115.jpg' }}
                    style={{ width: 48, height: 48, justifyContent: 'center' }} />
            </Pressable>

            {screenStates.users.users.length > 0 ? (
                <View>
                    <FlatList
                        style={{ flex: 1 }}
                        data={screenStates.users.users}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            ) : (
                <Text style={styles.noNotes}>No Data found {screenStates.users.users}</Text>)
            }

        </View>
    )
}

export default userList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noNotes: {
        flex: 1,
        marginStart: 24,
        fontSize: 14,
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    }

})