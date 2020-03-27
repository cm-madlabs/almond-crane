import * as React from 'react'
import Link from 'next/link'

import { Route } from '../interfaces'

type Props = {
  data: Route
}

const RouteListItem: React.FunctionComponent<Props> = ({ data }) => (
  <div>
    {data.departure} → {data.arrival} (XX分)
    <Link href="/routes/[id]" as={`/routes/${data.id}`}>詳細</Link>
  </div>
);

export default RouteListItem
