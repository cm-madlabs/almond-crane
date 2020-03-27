import * as React from 'react';
import RouteListItem from './RouteListItem'
import { Route } from '../interfaces'

type Props = {
    routeItems: Route[]
}

const RouteList: React.FunctionComponent<Props> = ({ routeItems }) => (
    <ul>
        {routeItems.map(item => (
            <li key={item.id}>
                <RouteListItem data={item} />
            </li>
        ))}
    </ul>
);

export default RouteList;
