import React from 'react';
import styles from './index.css';
import { Row, Col, Spin } from 'antd';
import BraftEditor from 'braft-editor';
import {wordDict} from './dict';
import 'braft-editor/dist/index.css';

export class Tools extends React.Component<{}, {editorState: any, replaceState: string }> {
  private debounceTimer: any;
  private wordReg: any;
  private isDebouncing: boolean;
  constructor(props: any) {
    super(props);
    this.debounceTimer = 0;
    this.state = {
      editorState: BraftEditor.createEditorState(null),
      replaceState: ''
    };
    this.isDebouncing = false;
    this.wordReg = new RegExp(`(${wordDict.join('|')})`, 'g');
  }

  componentWillMount() {}

  asyncToCopyEditor(state) {
    let me = this;
    clearTimeout(me.debounceTimer);
    me.debounceTimer = setTimeout(() => {
      let replaceHTML = state.toHTML().replace(me.wordReg, `<span style="color:red">$1</span>`);
      replaceHTML = replaceHTML.replace(new RegExp('> </p>', 'g'), '></p>');
      me.setState({ replaceState: replaceHTML });
    }, 200);
  }

  handleEditorChange = editorState => {
    this.asyncToCopyEditor(editorState)
    this.setState({ editorState });
  };

  render() {
    return (
      <>
        <Row style={{margin: '10px 0', textAlign: 'left'}}>
          <Col span={12}>
              在此粘贴文案后自动识别,根据文稿长短，请您耐心等待5-45秒(已经输入
              {this.state.editorState && this.state.editorState.toText().length}
              个字)
            </Col>
            <Col span={12}>
            新广告法禁用词、小红书禁用词已用<span style={{color: 'red'}}>红色</span>高亮字体标出,请您参考修改，审慎发布
            </Col>
        </Row>
        <Row>
          <Col span={12}>
            <BraftEditor
              contentStyle={{height: 'auto', minHeight: 400}}
              className={styles.editor}
              placeholder="在此粘贴文案"
              controls={[]}
              value={this.state.editorState}
              onChange={this.handleEditorChange}
            />
          </Col>
          <Col span={12}>
            <div className={styles.validator} dangerouslySetInnerHTML={{__html: this.state.replaceState}} />
          </Col>
        </Row>
      </>
    );
  }
}

export default function() {
  return <Tools/>;
}
