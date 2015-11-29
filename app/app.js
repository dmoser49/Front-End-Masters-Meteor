Comments = new Mongo.Collection('comments');

if (Meteor.isClient) {
  Template.CommentList.helpers({
    comments: function() {
      return Comments.find();
    }
  });

  Template.CommentAdd.events({
    'submit form': function(e, tmpl) {
      e.preventDefault();

      var formEl = tmpl.find('form');
      var commentEl = tmpl.find('[name=comment]');
      var comment = commentEl.value;

      console.log(comment);

      Comments.insert({
        login: 'dmoser49',
        timestamp: new Date,
        room: 'main',
        comment: comment
      });
      formEl.reset();
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
