## 1.1 - Breakdown Syntax
 **describe**('describe the test suite'):
  - Create a test suite
[ ] test(string_description, test_function ):
  - Test fails if error is thrown when running function
  - describe test case
[ ] it ('should do something') :
  - Create a test

[x] **render**: 
  - Create a virtual DOM for argument jsx/tsx
  - Access virtual DOM via screen global
  * Some Properties: 
    - screen.debug() - Print virtual DOM
    - screen.getByText() - Find element by text
    - screen.getByRole() - Find element by role
    - screen.getByLabelText() - Find element by label
    - screen.getByPlaceholderText() - Find element by placeholder
  [ ] expect: 
    - enter the element to be tested
    - Matchers: 
      - toBeInTheDocument() - Check if element is in the DOM
      - toHaveTextContent() - Check if element has text
      - toBe - Check if element is equal to something
      - toHaveAttribute() - Check if element has attribute
      - toBeVisible() - Check if element is visible
      - toBeDisabled() - Check if element is disabled