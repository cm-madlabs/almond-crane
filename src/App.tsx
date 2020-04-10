import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {List} from './components/Course/List'
import { CourseListDetail } from './components/Course/Detail'
import { Course } from "./interfaces";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const sampleRouteData: Course[] = [
    {
        id: '1',
        name: 'ルート１',
        departure: '出発地',
        arrival: '目的地',
        notification: true,
        schedule: {},
        timeTable: {},
        requiredMinutes: 10,
    },
    {
        id: '2',
        name: '会社 → 自宅',
        departure: '会社 (岩本町オフィス)',
        arrival: '岩本町',
        notification: true,
        schedule: {},
        timeTable: {},
        requiredMinutes: 10,
    },
    {
        id: '3',
        name: '自宅 → 会社',
        departure: '自宅',
        arrival: 'XXX駅',
        notification: true,
        schedule: {},
        timeTable: {},
        requiredMinutes: 5,
    },
];

const data: Course[] = [
    ...sampleRouteData
];

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/courses/add'>
                    <p>new route</p>
                </Route>
                <Route path='/courses/:id'>
                    <CourseListDetail items={data} />
                </Route>
                <Route path='/'>
                    <View>
                        <Text>Hello React Native for Web!</Text>
                        <List routeItems={data} />
                        <Link to={`/courses/add`}>
                          <Button title='ルートを追加' onPress={() => {}} />
                        </Link>
                    </View>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
