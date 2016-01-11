#!/usr/bin/env node
'use strict'
const ghIssues = require('github-issues-stream')
const meow = require('meow')

const cli = meow(`
	Usage
	  $ issue-links [options] <repo>

	Options
    -t, --token <token-str>  GitHub token. Generate at https://github.com/settings/tokens
    -n, --num-issues <num>  Get number of issues. Otherwise, get them all.

`, {
  alias: { t: 'token', n: 'num-issues' }
})

if (!cli.input[0]) {
  cli.showHelp()
  process.exit(1)
}

let c = cli.flags.n || Infinity

console.log('')
ghIssues(cli.input[0], cli.flags)
.on('readable', function () {
  let issue
  while ((issue = this.read()) && (c > 0)) {
    outputLink(issue)
    c -= 1
  }
})
.on('error', (error) => {
  if (error.statusCode === 404) return console.log(`${cli.input[0]} not found. Is the repo private? Did you forget to set a Github token?`)
  console.log('ERROR: ' + error)
})
.on('end', () => {
  console.log('')
})

function outputLink (issue) {
  if (!issue) return
  let labels = issue.labels.map((label) => label.name).join(', ')
	if (labels.length > 0) {
		console.log(`<!--- ${issue.title} [${labels}] -->`)
	} else {
		console.log(`<!--- ${issue.title} -->`)
	}
	console.log(`[#${issue.number}]: ${issue.html_url}`)
}
