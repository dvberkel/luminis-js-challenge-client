Luminis JS Challenge Client
===========================

This repository contains a client to the [Luminis JS Challenge Server][server].

Environment
-----------

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

It watches all the development files and reruns the tests on any change.

[server]: https://github.com/wtreur/luminis-js-challenge-server
[npm]: https://npmjs.org/
[node]: http://nodejs.org/
[grunt]: http://gruntjs.com/