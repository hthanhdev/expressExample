"use strict";

const userController = require("../controller/userController");

module.exports = (router) => {
    router.route("/user").get(userController.create)
//   router.route("/users").get(authentication.isLogged, userController.getList);

//   router.route('/users')
//     .put(authentication.isLogged,
//       userController.updateUser);

//   router.route('/users/:userId')
//     .get(authentication.isLogged,
//       userController.getUser);

//   router
//     .route("/users")
//     .delete(authentication.isLogged, userController.deleteUser);

  return router;
};