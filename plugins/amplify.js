import Amplify, { Auth } from 'aws-amplify';
import '@aws-amplify/ui-vue';
import awsconfig from '~/aws-exports.js';
Amplify.configure(awsconfig);
