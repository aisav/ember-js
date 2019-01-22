import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let bands = this.modelFor('bands');
    console.log('Model hook called for `bands.band` called with', params.slug);
    return bands.findBy('slug', params.slug);
  },
})
