import * as React from 'react'
import {View, Text, Button} from 'react-native';

import {Course} from '../../interfaces'
import {StyleSheet} from "react-native";
import {Link} from "react-router-dom";

type Props = {
    data: Course
    editing: boolean
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0.01,
    },
    item: {
        backgroundColor: '#d53838',
        padding: 20,
        // marginVertical: 8,
        marginHorizontal: 16,
        borderColor: '#000000',
        borderWidth: 2,
    },
    title: {
        fontSize: 32,
        backgroundColor: '#0de20d',
    },
});

const ListItem: React.FunctionComponent<Props> = (props) => (
    <View style={styles.item}>
        <Link to={`/courses/${props.data.id}`}>
        <Text style={styles.title}>{props.data.id} {props.data.name}</Text>
            <Button title='詳細' onPress={() => {}} />
        </Link>
    </View>
);

export default ListItem
