[![Build Status](https://app.travis-ci.com/auxfix/hacker_news.svg?branch=master)](https://app.travis-ci.com/auxfix/hacker_news) [![Maintainability](https://api.codeclimate.com/v1/badges/f7e260f915e6f0476fbb/maintainability)](https://codeclimate.com/github/auxfix/hacker_news/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/f7e260f915e6f0476fbb/test_coverage)](https://codeclimate.com/github/auxfix/hacker_news/test_coverage)

# Hacker News :floppy_disk:

### URL: [www.besthackingnews.net](https://www.besthackingnews.net).

This is a simple news feed application that shows 10 random hucking news from the [Hacker News API](https://github.com/HackerNews/API).

## Main features :cd:

- **React 18**-based app
- **Redux/Redux-toolkit/redux-saga** is used for the state management
- it is a full **CI/CD** solution: if new code is committed in the master branch it will be **built/linted/tested** first and if these steps are finished successfully then it will be uploaded automatically to **AWS S3/CloudFront**
- **TypeScript**
- **sass modules/styled-component** for the styling
- it has a decent test coverage > 70%
- **git hooks** which runs linters and tests on every commit, which prevents problematic/_not super beautiful_ code slippering to the repository

### folder structure :file_folder:

This app has a standard redux structure with dedicated folders for _components/redusers/actions/sagas_. But these folder contains only code for the common functionality. All code specific for the particular features is contained in the **feature** subfolder with the corresponding name. Now this app has only one feature: **news** so it might seem like an overengineering solution, but it will help when the app will grow, so it will be a way easy to find files by their feature origin.

### test coverage and bundle size :microscope:

**Test coverage** and **bundle size** are calculated on every build, so we can control these values and see if they violate admissible thresholds

### unit/e2e tests :test_tube:

Code is covered both with the **unit** and **e2e** tests. **Unit** tests check small pieces of functionality in the isolation and the **e2e** test runs the common scenario of viewing and updating news feed

### hosting :globe_with_meridians:

**Hacker News** app is a production-ready deployment solution. It is hosted as a static site on the **AWS S3** bucket and distributed via **Cloud Front** for the better loading speed across the globe. The connection is encrypted with **SSL**, so it will be safe to transfer user data if some account/user functionality will be implemented in the future.
