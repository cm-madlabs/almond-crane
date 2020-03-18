import * as React from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
} from 'react-native';
import ListItem from './ListItem'
import { Course } from '../../interfaces'

export type Props = {
    routeItems: Course[]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0.01,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

const List: React.FunctionComponent<Props> = ({ routeItems }) => (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={routeItems}
            renderItem={({ item }) => <ListItem  data={item} editing={true} />}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
);

export {
    List
};
