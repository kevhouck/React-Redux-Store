# React-Redux-Store
A an example of a web store using React, Redux, Webpack, Node.js, and MongoDB. Has user auth and pagination.

My motivation for this project was to get some experience with React, Redux, ES6, and Webpack.

I use Redux for this project for state management, including pagination. All API calls are actually made inside the dispatchers. The only state not in Redux is some very basic view logic that seems overkill to move to the Redux store, as it's state is 100% local to the view it belongs to.
