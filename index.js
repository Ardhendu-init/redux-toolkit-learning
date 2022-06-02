const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
// console.log(cakeActions);
const icecreamAction =
  require("./features/icecream/icecreamSlice").icecreamActions;
console.log("Intial state ", store.getState());
const fetchUsers = require("./features/user/userSlice").fetchUsers;

//without applying logger middleware
const unsubscribe = store.subscribe(() => {
  console.log("Updated state ", store.getState());
});

//with applying logger middleware
// const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamAction.ordered());
// store.dispatch(icecreamAction.ordered());
// store.dispatch(icecreamAction.ordered());
// store.dispatch(icecreamAction.restocked(3));
store.dispatch(fetchUsers());

// unsubscribe();
