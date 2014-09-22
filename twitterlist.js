

if (Meteor.isClient) {
	Template.content.users = function () {
		return Meteor.users.find();
	};
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
