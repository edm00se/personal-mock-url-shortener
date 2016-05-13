# Personal Mock URL Shortener

This is a mock url shortener, mostly for fun.

## Installation

* download the latest release, or clone from the latest in the `master` branch
* install via `npm install`
* run via `npm start`

## Usage

In order to make one your own, you will need to:

* edit the `config/index.js` (config module) file to export your links
* preserve the object format
* it exports as JSON and will build out both the available routes for redirection and the UI dynamically

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

I already had a short domain name that's unique to my name space, so I thought I would try and set up something like a URL shortener. While there are other packages out there, I didn't find any projects of any recent flavor that ran in node, my current runtime of choice. This doesn't use a back-end to store the data, unless you cound a js module as an object as a flat file. In the future, I may add more functionality.

## License

The code in this project governs my unique contributions and is open, free to use and redistribute or modify, for public or private use, without warranty or liability.

[The MIT License (MIT)](http://choosealicense.com/licenses/mit/) © 2016 Eric McCormick

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
