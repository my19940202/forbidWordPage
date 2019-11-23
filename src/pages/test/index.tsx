import React from 'react';
import { Row, Col } from 'antd';

export class Test extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            ths is index page
          </Col>
        </Row>
      </>
    );
  }
}

export default function() {
  return <Test/>;
}
