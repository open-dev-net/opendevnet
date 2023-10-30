import { NxPlugin } from '@nx/devkit';
import { processProjectGraph, registerProjectTargets } from './graph';

const nxPlugin: NxPlugin = {
  name: '@odnlabs/nx-rust',
  processProjectGraph,
  projectFilePatterns: ['Cargo.toml'],
  registerProjectTargets,
};

export = nxPlugin;
