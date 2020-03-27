import * as React from 'react'

import { Route } from '../interfaces'

type RouteListDetailProps = {
  item: Route
}

const RouteListDetail: React.FunctionComponent<RouteListDetailProps> = ({
  item: route,
}) => (
  <div>
    <h1>Detail for {route.name}</h1>
    <p>ID: {route.id}</p>
    <p>出発地: {route.departure}</p>
    <p>到着地: {route.arrival}</p>
    <p>通知: {route.notification ? 'ON' : 'OFF'}</p>
    <p>スケジュール: </p>
    <p>時刻表: </p>
    <p>所要時間: {route.requiredMinutes}分</p>
  </div>
)

export default RouteListDetail
