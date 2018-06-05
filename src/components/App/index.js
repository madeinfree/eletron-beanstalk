import AWS from 'aws-sdk';
import React, { Component } from 'react';

import Banner from '../Banner';
import Content from '../Content';
import ListTable from '../ListTable';

const ElasticBeanstalk = require('../../modules/ElasticBeanstalk/');
const config = require('../../config');

const instance = new ElasticBeanstalk({
  id: config.awsId,
  key: config.awsKey,
  region: config.awsRegion
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      environmentName: 'Yosgo-api-compose',
      infoType: 'tail',
      tailList: [],
      environments: config.environments,
      infoTypes: config.infoTypes,
      tipMessage: ''
    };

    this._onChangeEnvironmentName = this._onChangeEnvironmentName.bind(this);
    this._onChangeInfoType = this._onChangeInfoType.bind(this);
    this._onClickToRestartAppServer = this._onClickToRestartAppServer.bind(
      this
    );
    this._onClickToDescribeEnvironmentHealth = this._onClickToDescribeEnvironmentHealth.bind(
      this
    );
    this._onClickToRequestEnvironmentInfo = this._onClickToRequestEnvironmentInfo.bind(
      this
    );
    this._onClickToRetrieveEnvironmentInfo = this._onClickToRetrieveEnvironmentInfo.bind(
      this
    );
  }
  _onChangeEnvironmentName(e) {
    e.persist();
    this.setState(props => ({
      environmentName: e.target.value
    }));
  }
  _onChangeInfoType(e) {
    e.persist();
    this.setState(props => ({
      infoTypes: e.target.value
    }));
  }
  _onClickToRestartAppServer() {
    instance
      .restartAppServer({
        environmentName: this.state.environmentName
      })
      .then(data => {
        this.setState(state => ({
          tipMessage: `<重啟 ${this.state.environmentName} 環境>`
        }));
      });
  }

  _onClickToDescribeEnvironmentHealth() {
    instance
      .describeEnvironmentHealth({
        environmentName: this.state.environmentName
      })
      .then(data => {
        const dataString = JSON.stringify(data, null, 4);
        alert(dataString);
        this.setState(state => ({
          tipMessage: `<檢查 ${this.state.environmentName} 環境>`
        }));
      });
  }
  _onClickToRequestEnvironmentInfo() {
    instance
      .requestEnvironmentInfo({
        environmentName: this.state.environmentName,
        infoType: this.state.infoType
      })
      .then(data => {
        this.setState(state => ({
          tipMessage: `<建立 ${this.state.environmentName} 環境成功>`
        }));
      });
  }
  _onClickToRetrieveEnvironmentInfo() {
    instance
      .retrieveEnvironmentInfo({
        environmentName: this.state.environmentName,
        infoType: this.state.infoType
      })
      .then(data => {
        const { EnvironmentInfo } = data;
        this.setState(state => ({
          tailList: EnvironmentInfo,
          tipMessage: `<查詢 ${this.state.environmentName} 環境成功>`
        }));
      });
  }
  componentDidMount() {
    instance.init();
  }
  render() {
    return (
      <div>
        <Banner />
        <Content
          infoTypes={this.state.infoTypes}
          environments={this.state.environments}
          environmentName={this.state.environmentName}
          changeEnvironmentName={this._onChangeEnvironmentName}
          changeInfoType={this._onChangeInfoType}
          clickToRestartAppServer={this._onClickToRestartAppServer}
          clickToDescribeEnvironmentHealth={
            this._onClickToDescribeEnvironmentHealth
          }
          clickToRequestEnvironmentInfo={this._onClickToRequestEnvironmentInfo}
          clickToRetrieveEnvironmentInfo={
            this._onClickToRetrieveEnvironmentInfo
          }
        />
        <div className="text-center">{this.state.tipMessage}</div>
        <br />
        <ListTable tailList={this.state.tailList} />
      </div>
    );
  }
}

export default App;
