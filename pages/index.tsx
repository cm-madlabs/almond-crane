import * as React from 'react';
import Layout from '../components/Layout';
import RouteList from '../components/RouteList';
import { NextPage } from 'next';
import { Container } from '@material-ui/core';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Almond crane">
      <Container>
        <h1>Almond crane</h1>
        <RouteList routeItems={[
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
            name: 'ルート２',
            departure: '出発地',
            arrival: '目的地',
            notification: true,
            schedule: {},
            timeTable: {},
            requiredMinutes: 10,
          },
        ]}/>
      </Container>
    </Layout>
  );
};

export default IndexPage;
