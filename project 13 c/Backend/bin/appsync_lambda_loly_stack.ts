#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppsyncLambdaLolyStack } from '../lib/appsync_loly_stack'

const app = new cdk.App();
new AppsyncLambdaLolyStack(app, 'AppSyncLolyStack');
