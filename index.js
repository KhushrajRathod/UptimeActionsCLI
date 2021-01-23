#!/usr/bin/env node
const csv = require('csv-parser')
const { createReadStream } = require('fs')
const yargs = require('yargs/yargs')
const util = require('util')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('f', {
        alias: 'file',
        demandOption: false,
        default: 'uptimerobot-monitors.csv',
        describe: 'Path to the uptimerobot csv file',
        type: 'string'
    })
    .argv

const results = []
let construct = []

const defaultConfig = {
    config: {
        alertEndpoints: [
            "https://monitor.khushrajrathod.com/api/slack"
        ]
    },
}

createReadStream(argv.file)
    .on('error', () => {
        console.error("ERROR: Config file path not passed with -f and uptimerobot-monitors.csv doesn't exist in the current directory")
        process.exit(1)
    })
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        for (const result of results) {
            construct.push({
                name: result["Friendly Name"],
                url: result["URL/IP"]
            })
        }
        defaultConfig.endpoints = construct
        console.log(
            "export default " +
            util.inspect(defaultConfig, {
                showHidden: false,
                depth: null,
                colors: true,
                compact: false
            })
        )
    })