/**
 * @flow
 */

type ProcessENV = {
  awsKey: string,
  awsId: string,
  awsRegion: string,
  environments: Array<string>
};

const electron = window.require('electron');

const remote = electron.remote;

const awsKey = remote.process.env.AWS_KEY;
const awsId = remote.process.env.AWS_ID;
const awsRegion = remote.process.env.AWS_REGION;
const environments = remote.process.env.ENVIRONMENTS.split(',');

const infoTypes: Array<string> = ['tail', 'bundle'];

const env: ProcessENV = {
  awsKey,
  awsId,
  awsRegion,
  environments,
  infoTypes
};

module.exports = env;
