import Route from '@ember/routing/route';

export default Route.extend({

  // We dont wright this code, will be done automatically

  // model() {
  //   return this.modelFor('bands.band');
  // }

  actions: {
    willTransition(transition) {
      if (this.controller.isEditing) {
        let leave = window.confirm('Are you sure?');
        if (!leave) {
          transition.abort();
        }
      }
    }
  }
});
