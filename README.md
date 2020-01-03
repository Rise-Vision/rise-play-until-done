# rise-play-until-done [![CircleCI](https://circleci.com/gh/Rise-Vision/rise-play-until-done.svg?style=svg)](https://circleci.com/gh/Rise-Vision/rise-play-until-done) [![Coverage Status](https://coveralls.io/repos/github/Rise-Vision/rise-play-until-done/badge.svg?branch=master)](https://coveralls.io/github/Rise-Vision/rise-play-until-done?branch=master)

`rise-play-until-done` is a Polymer 3 Web Component that enables the template designer to controls when the template is done.

#### Example

```
  <rise-play-until-done id="animation-done">
  </rise-play-until-done>
```

### Attributes

This component receives the following list of attributes:

- **id**: ( string ): Unique HTMLElement id.

### Events

The component sends the following events:

- **_configured_**: The component has initialized what it requires to and is ready to handle a _start_ event.

### Usage

Include the `<rise-play-until-done>` tag in the document and call `reportDone()` when necessary (on animation end, on data error, etc):

```
  <rise-play-until-done id="animation-done">
  </rise-play-until-done>

  <script>
    const doneElement = document.getElementById('animation-done');
    doneElement.reportDone();
  </script>
```

## Built With
- [Polymer 3](https://www.polymer-project.org/)
- [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)
- [WebComponents Polyfill](https://www.webcomponents.org/polyfills/)
- [npm](https://www.npmjs.org)

## Development

### Local Development Build
Clone this repo and change into this project directory.

Execute the following commands in Terminal:

```
npm install
npm install -g polymer-cli@1.9.7
npm run build
```

**Note**: If EPERM errors occur then install polymer-cli using the `--unsafe-perm` flag ( `npm install -g polymer-cli --unsafe-perm` ) and/or using sudo.

### Testing
You can run the suite of tests either by command terminal or interactive via Chrome browser.

#### Command Terminal
Execute the following command in Terminal to run tests:

```
npm run test
```

In case `polymer-cli` was installed globally, the `wct-istanbul` package will also need to be installed globally:

```
npm install -g wct-istanbul
```

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues, please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas, please post your thoughts to our [community](https://help.risevision.com/hc/en-us/community/topics), otherwise submit a pull request and we will do our best to incorporate it. Please be sure to submit corresponding E2E and unit tests where appropriate.

### Languages
If you would like to translate the user interface for this product to another language, please refer to the [common-i18n](https://github.com/Rise-Vision/common-i18n) repository.

## Resources
If you have any questions or problems, please don't hesitate to join our lively and responsive community at https://help.risevision.com/hc/en-us/community/topics.
