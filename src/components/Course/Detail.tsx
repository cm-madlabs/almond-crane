import * as React from 'react'
import {Text} from 'react-native';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Course } from '../../interfaces'
import { useParams } from "react-router-dom";

type CourseListDetailProps = {
  items: Course[]
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

const CourseListDetail: React.FunctionComponent<CourseListDetailProps> = ({
  items
}) => {
  const { id } = useParams()
  const item = items.find(x => x.id === id)
  return (
    <SafeAreaView>
      <h1>Detail for {item?.name}</h1>
      <Text style={styles.item}>ID: {item?.id}</Text>
      <Text style={styles.item}>出発地: {item?.departure}</Text>
      <Text style={styles.item}>到着地: {item?.arrival}</Text>
      <Text style={styles.item}>通知: {item?.notification ? 'ON' : 'OFF'}</Text>
      <Text style={styles.item}>スケジュール: </Text>
      <Text style={styles.item}>時刻表: </Text>
      <Text style={styles.item}>所要時間: {item?.requiredMinutes}分</Text>
    </SafeAreaView>
  )
}
export { CourseListDetail }