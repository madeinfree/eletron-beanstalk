const electron = window.require('electron');

const remote = electron.remote;

const awsKey = remote.process.env.AWS_KEY;
const awsId = remote.process.env.AWS_ID;
const awsRegion = remote.process.env.AWS_REGION;
const environments = remote.process.env.ENVIRONMENTS.split(',');

const infoTypes = ['tail', 'bundle'];

module.exports = {
  awsKey,
  awsId,
  awsRegion,
  environments,
  infoTypes
};
