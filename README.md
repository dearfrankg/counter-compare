
# counter-app

This app shows how to code a counter app using different frameworks.

## How to demo on gh-pages

Because I keep a repo with all my projects each in a different branch,
I'm not able to save my gh-branches in my personal-repo.

If you would like to get this demo up on github gh-pages do the following:

    $ git co -b --orphan gh-pages
    $ rm -rf ./*
    $ rm .gitignore
    $ cp ../public/* .
    $ git add .
    $ git ci -m 'init'
    $ git push -f

    
