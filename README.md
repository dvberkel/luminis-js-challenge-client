Luminis JS Challenge Client [![Build Status](https://travis-ci.org/dvberkel/luminis-js-challenge-client.png?branch=master)](https://travis-ci.org/dvberkel/luminis-js-challenge-client)
===========================

This repository contains a client to the [Luminis JS Challenge Server][server].

Environment
-----------

### tl;dr

Execute the following commands to setup

    sudo npm install -g grunt-cli bower
    npm install
    bower install

### Detailed

We us [npm][] to manage our dependencies. It comes installed with
[node][] which we assume is installed. Run the following command to
download this project dependencies

    npm install

[grunt][] is used to automate various tasks. It needs a globally
installed `grunt-cli`.

    sudo npm install -g grunt-cli

When the `grunt` is run the project is checked, tested, concatenated
and minified. When developing the following command comes in handy

    grunt watch:jasmine

It watches all the development files and reruns the tests on any
change.

We are using [bower][] as a front-end package manager. Just like
`grunt-cli` it needs to be installed globally with

    sudo npm instal -g bower

Afterwards run

    bower install

[server]: https://github.com/wtreur/luminis-js-challenge-server
[npm]: https://npmjs.org/
[node]: http://nodejs.org/
[grunt]: http://gruntjs.com/
[bower]: https://github.com/twitter/bower