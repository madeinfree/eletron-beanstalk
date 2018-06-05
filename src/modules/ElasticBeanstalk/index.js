/**
 * @flow
 */

const AWS = require('aws-sdk');

type ElasticBeanstalkDefaultSetting = {
  id: string,
  key: string,
  region: string,
  version: string
};

class ElasticBeanstalk {
  _EB: AWS.ElasticBeanstalk;
  _id: string;
  _key: string;
  _region: string;
  _version: string;
  constructor({
    id,
    key,
    region,
    version = '2010-12-01'
  }: ElasticBeanstalkDefaultSetting) {
    this._EB = null;

    this._id = id;
    this._key = key;
    this._region = region;
    this._version = version;
  }

  init() {
    this._EB = new AWS.ElasticBeanstalk({
      apiVersion: this._version,
      region: this._region,
      accessKeyId: this._id,
      secretAccessKey: this._key
    });
  }

  describeEnvironmentHealth({
    environmentName,
    attributeNames = 'All'
  }: {
    environmentName: string,
    attributeNames: string
  }): Promise<*> {
    return new Promise((resolve, reject) => {
      this._EB.describeEnvironmentHealth(
        {
          AttributeNames: [attributeNames],
          EnvironmentName: environmentName
        },
        function(err, data) {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });
  }

  restartAppServer({
    environmentName
  }: {
    environmentName: string
  }): Promise<*> {
    return new Promise((resolve, reject) => {
      this._EB.restartAppServer(
        {
          EnvironmentName: environmentName
        },
        function(err, data) {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });
  }

  requestEnvironmentInfo({
    environmentName,
    infoType
  }: {
    environmentName: string,
    infoType: string
  }): Promise<*> {
    return new Promise((resolve, reject) => {
      this._EB.requestEnvironmentInfo(
        {
          EnvironmentName: environmentName,
          InfoType: infoType
        },
        function(err, data) {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });
  }

  retrieveEnvironmentInfo({
    environmentName,
    infoType
  }: {
    environmentName: string,
    infoType: string
  }): Promise<*> {
    return new Promise((resolve, reject) => {
      this._EB.retrieveEnvironmentInfo(
        {
          EnvironmentName: environmentName,
          InfoType: infoType
        },
        function(err, data) {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });
  }

  isInit() {
    if (!this._EB) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = ElasticBeanstalk;
