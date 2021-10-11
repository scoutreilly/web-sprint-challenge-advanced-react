# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

- Functional components return an element, while stateful render the return statement. Functional components don't manage state, where stateful ones do. Lifecycle methds cannot be used in functional, but they can in stateful.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

- It's called after all child components have mounted. componenetWillUpdate is called before rendering new info based on state.

3. Define stateful logic.

- Code that uses state between multiple components.

4. What are the three step of creating a successful test? What is done in each phase?

- Working through list of edge cases, testing component rendering and functionality, writing code based off of tests.
