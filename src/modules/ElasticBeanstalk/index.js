const AWS = require('aws-sdk');

class ElasticBeanstalk {
  constructor({ id, key, region, version = '2010-12-01' }) {
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

  describeEnvironmentHealth({ environmentName, attributeNames = 'All' }) {
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

  restartAppServer({ environmentName }) {
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

  requestEnvironmentInfo({ environmentName, infoType }) {
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

  retrieveEnvironmentInfo({ environmentName, infoType }) {
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

  isWorked() {
    if (!this._EB) throw new Error('Should be init the AWS Beanstalk.');
    else return true;
  }
}

module.exports = ElasticBeanstalk;
