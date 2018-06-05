import React, { Component } from 'react';

class Content extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      region,
      infoTypes,
      environments,
      environmentName,
      clickToRestartAppServer,
      clickToDescribeEnvironmentHealth,
      clickToRequestEnvironmentInfo,
      clickToRetrieveEnvironmentInfo,
      changeEnvironmentName,
      changeInfoType
    } = this.props;
    return (
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Electron EB</h1>
        <p className="lead">
          用 Open Source Electron 快速管理您的任何 AWS 上 Elastic Beanstalk 服務
        </p>
        <div>
          <div>
            環境名稱：<select onChange={changeEnvironmentName}>
              {environments.map((env, index) => (
                <option key={index}>{env}</option>
              ))}
            </select>
          </div>
          <div>
            資訊類型：<select onChange={changeInfoType}>
              {infoTypes.map((env, index) => (
                <option key={index}>{env}</option>
              ))}
            </select>
          </div>
          <div>地區：{region}</div>
          <br />
          <div onClick={clickToRequestEnvironmentInfo} className="btn btn-info">
            建立 {environmentName}
          </div>
          <div
            onClick={clickToRetrieveEnvironmentInfo}
            className="btn btn-info"
          >
            查詢 {environmentName}
          </div>
          <div onClick={clickToRestartAppServer} className="btn btn-info">
            重啟 {environmentName}
          </div>
          <div
            onClick={clickToDescribeEnvironmentHealth}
            className="btn btn-info"
          >
            {environmentName} 健康狀態檢查
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
