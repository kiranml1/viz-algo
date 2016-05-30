#!/bin/bash
npm install
npm run lib-lint
npm run lib-build
npm run lib-test
npm run lib-test-coverage
npm run react-lint
npm run react-build
npm run react-test
npm run react-test-coverage