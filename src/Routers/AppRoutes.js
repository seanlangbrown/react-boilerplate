// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
export default const routes = [
  {
    path: "/",
    component: null
  },
  {
    path: "/about",
    component: null
  },
  {
    path: "/search",
    component: null,
    routes: [
      {
        path: "/search/result",
        component: null
      }
    ]
  },
];