import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      var title = this.get('newTitle');
      if(!title) {return false;}
      if(!title.trim()) { return; }

      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the New Todo text field
      this.set('newTitle', '');

      todo.save();
    }
  }
})
