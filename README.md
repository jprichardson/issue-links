issue-links
===========
> Help to keep tidy `CHANGELOG.md`/`HISTORY.md` files by keeping your GitHub Issue
links up to date.

Install
-------

    npm i -g issue-links


Usage
-----

```

  Output GitHub issue links.

  Usage
    $ issue-links [options] <repo>

  Options
     -t, --token <token-str>  GitHub token. Generate at https://github.com/settings/tokens
     -n, --num-issues <num>  Get number of issues. Otherwise, get them all.

```

**Example:**

    issue-links jprichardson/node-fs-extra

Outputs:

```markdown
<!--- copy/copySync behave differently when copying a symbolic file [bug, documentation, feature-copy] -->
[#210]: https://github.com/jprichardson/node-fs-extra/issues/210
<!--- In Windows invalid directory name causes infinite loop in ensureDir(). [bug] -->
[#209]: https://github.com/jprichardson/node-fs-extra/issues/209
<!--- fix options.preserveTimestamps to false in copy-sync by default [feature-copy] -->
[#208]: https://github.com/jprichardson/node-fs-extra/pull/208
...
A LOT OF ISSUES
...
<!--- Hi! I fixed some code for you! -->
[#3]: https://github.com/jprichardson/node-fs-extra/pull/3
<!--- Merge with fs.extra and mkdirp -->
[#2]: https://github.com/jprichardson/node-fs-extra/issues/2
<!--- file-extra npm !exist -->
[#1]: https://github.com/jprichardson/node-fs-extra/issues/1
```

You'd then paste this output at the bottom of your `CHANGELOG.md` or `HISTORY.md` file. Then you can easily reference
the link your CHANGELOGS by writing `See: [#208][#208]` as opposed to just pasting the link and making your CHANGELOG
files hard to read. See: https://github.com/jprichardson/node-fs-extra/commit/3a8a6e8ec30630ed4d9f07d2e839b4be659fa609 as an example.

License
-------

MIT

Copyright (c) [JP Richardson](https://github.com/jprichardson)
