import Route from '@ember/routing/route';

export default Route.extend({

  // We do not wright this code, it is done by convention

  // model: function() {
  //   return this.modelFor('bands.band');
  // }

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.name} songs - Rock & Roll`;
    },
  }
});
