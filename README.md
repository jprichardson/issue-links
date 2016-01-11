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
<!--- Add `compare` suite of functions -->
[#207]: https://github.com/jprichardson/node-fs-extra/issues/207
<!--- outputFileSync -->
[#206]: https://github.com/jprichardson/node-fs-extra/issues/206
<!--- fix documents about copy/copySync [documentation, feature-copy] -->
[#205]: https://github.com/jprichardson/node-fs-extra/issues/205
<!--- allow copy of block and character device files -->
[#204]: https://github.com/jprichardson/node-fs-extra/pull/204
<!--- copy method's argument options couldn't be undefined [bug, feature-copy] -->
[#203]: https://github.com/jprichardson/node-fs-extra/issues/203
<!--- why there is not a walkSync method? -->
[#202]: https://github.com/jprichardson/node-fs-extra/issues/202
<!--- clobber for directories [feature-copy, future] -->
[#201]: https://github.com/jprichardson/node-fs-extra/issues/201
...
A LOT OF ISSUES
...
<!--- move / moveFile API [enhancement] -->
[#10]: https://github.com/jprichardson/node-fs-extra/issues/10
<!--- don't import normal fs stuff into fs-extra -->
[#9]: https://github.com/jprichardson/node-fs-extra/issues/9
<!--- Update rimraf to latest version -->
[#8]: https://github.com/jprichardson/node-fs-extra/pull/8
<!--- Remove CoffeeScript development dependency -->
[#6]: https://github.com/jprichardson/node-fs-extra/issues/6
<!--- comments on naming -->
[#5]: https://github.com/jprichardson/node-fs-extra/issues/5
<!--- version bump to 0.2 -->
[#4]: https://github.com/jprichardson/node-fs-extra/issues/4
<!--- Hi! I fixed some code for you! -->
[#3]: https://github.com/jprichardson/node-fs-extra/pull/3
<!--- Merge with fs.extra and mkdirp -->
[#2]: https://github.com/jprichardson/node-fs-extra/issues/2
<!--- file-extra npm !exist -->
[#1]: https://github.com/jprichardson/node-fs-extra/issues/1
```

License
-------

MIT

Copyright (c) [JP Richardson](https://github.com/jprichardson)
