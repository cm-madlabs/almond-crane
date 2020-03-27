import * as React from 'react'
import { NextPageContext } from 'next'

import { Route} from '../../interfaces'
import Layout from '../../components/Layout'
import { sampleRouteData } from '../../utils/sample-data'
import RouteListDetail from '../../components/RouteDetail';

type Props = {
  item?: Route
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query
      const item = sampleRouteData.find(r => r.id == id);
      return { item }
    } catch (err) {
      return { errors: err.message }
    }
  }

  render() {
    const { item, errors } = this.props

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${
          item ? item.name : 'Route Detail'
        } | Next.js + TypeScript Example`}
      >
        {item && <RouteListDetail item={item} />}
      </Layout>
    )
  }
}

export default InitialPropsDetail
