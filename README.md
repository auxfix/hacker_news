# Hacker News

This is a simple news feed application that shows 10 random hucking news from the [Hacker News API](https://github.com/HackerNews/API).

## Main features

- React 18-based app
- Redux/Redux-toolkit/redux-saga is used for the state management
- it is a full CI/CD solution: if new code is committed in the master branch then it built/linted/tested first and if
these steps are finished successfully then it will be uploaded automatically to AWS S3/CloudFront
- typescript
- sass modules/styled-component for the styling
- it has a decent test coverage > 70%
- git hooks which runs linters and tests on every commit, which prevents problematic/not super beautiful code slippering to the repository

### folder structure
  This app has a standard redux structure with dedicated folders for components/redusers/actions/sagas. But these folder contains only code for the common functionality. All code specific for the particular features is contained in the **feature** subfolder with the corresponding name. This code has only one feature **news** feature now so it might seem like an overengineering, but it will help when the app will grow so it will be a way easy to find files by their feature origin.
