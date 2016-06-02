#!/bin/bash
npm install
npm run lib-lint
npm run lib-karma
npm run lib-test-coverage
npm run react-lint
npm run react-karma
npm run react-test-coverage