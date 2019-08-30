'use strict'
const merge = require('webpack-merge')
const testEnv = require('./test.env')

module.exports = merge(testEnv, {
    beta: {
        NODE_ENV: '"beta"',
        bigData: '"https://test-click.gaotu100.com/"',
        manHaDun: {
            partner_id: 49752473
        },
        cdnPath: '"./"'
    },
    beta2: {
        NODE_ENV: '"beta2"',
        bigData: '"https://test-click.gaotu100.com/"',
        sentry: 'true', // 是否需要sentry上报
        manHaDun: {
            partner_id: 49752473
        },
        cdnPath: '"./"'
    },
    prod: {
        NODE_ENV: '"prod"',
        bigData: '"https://click.gaotu100.com/"',
        sentry: 'true', // 是否需要sentry上报
        manHaDun: {
            partner_id: 49752473
        },
        // cdnPath: '"//interactive-cdn.gaotu100.com/z_student/"',
        cdnPath: '"./"',
    }
})