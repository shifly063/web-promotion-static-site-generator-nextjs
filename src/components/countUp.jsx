import React from 'react';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;
import { Card, Col, Row, Statistic } from 'antd';

const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic title="Jumlah Penduduk" value={112893} formatter={formatter} />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic title="Luas Tanah" value={112893} precision={2} formatter={formatter} />
      </Card>
    </Col>
  </Row>
);
export default App;