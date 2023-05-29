# react Testing Library Filosophy

## What does it do?
  - Creates a virtual DOM for testing
    - and utilities for interacting with DOM
  - Allows testing withou a browser

## Types of Tests
- Unit Tests
  - Tests one unit of code in isolation
- Integration Tests
  - How multiple units wotk together
- Functional Tests
  - Tests a particular function of software
- Acceptance / End-to-end (E2E) Tests
  - Use actual browser and server (Cypress, Selenium)

## Functional Testing
- Different from unit testing
  - Unit testing 
    -  tests one unit of code in isolation
    -  Isolated: mock dependencies, test internals
    -  Very easy to pinpoint failures
    -  Further from how users interact with software
    -  More likely to break with refactoring
  - Functional testing 
    - tests a particular function of software
    - includes all relevaant units, test behavior
    - Close to how users interact with software
    - Robust tests
    - More difficult to debug failing test
    - 