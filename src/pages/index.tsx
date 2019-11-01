import React from 'react';
import styles from './index.css';
import { Row, Col } from 'antd';
import BraftEditor from 'braft-editor';
import {wordDict} from './dict';
import 'braft-editor/dist/index.css';

export class Tools extends React.Component<{}, { replaceState: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      replaceState: BraftEditor.createEditorState(null),
    };
  }

  componentWillMount() {}

  handleEditorChange = state => {
    let replaceHTML = state.toHTML();
    let wordReg = new RegExp(`${wordDict.join('|')}`, 'g');
    let wordMatch = replaceHTML.match(wordReg);
    console.log(wordMatch, 'wordMatch');

    if (wordMatch instanceof Array && wordMatch.length >= 1) {
      wordMatch.map(ele => {
        let weijngReg = new RegExp(`(${ele})`, 'g');
        replaceHTML = replaceHTML.replace(weijngReg, '<span style="color:red;">$1</span>');
        console.log('times');
      })
    }
    const tmp = BraftEditor.createEditorState(replaceHTML);
    this.setState({ replaceState: tmp });
  };

  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            <BraftEditor
              contentStyle={{height: 'auto', minHeight: 400}}
              className={styles.editor}
              placeholder="在此粘贴文案,按动上方按钮后，根据文稿长短，请您耐心等待5-45秒"
              controls={[]}
              onChange={this.handleEditorChange}
            />
          </Col>
          <Col span={12}>
            <BraftEditor
              contentStyle={{height: 'auto', minHeight: 400}}
              readOnly={true}
              className={styles.validator}
              controls={[]}
              value={this.state.replaceState}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default function() {
  return <Tools/>;
}
