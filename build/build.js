const webpack = require('webpack')
const config = require('./webpack.prod.conf')
const chalk = require('chalk')

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
        } else {
            console.error(err)
        }
        return
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
})