
module.exports.home = function (request, response) {
  console.log("Home controller action is working");
  return response.render("homeview", {
    title: "Home View",
  });
};
