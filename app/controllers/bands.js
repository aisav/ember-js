import Controller from '@ember/controller';
import Band from '../models/band';
import { empty } from '@ember/object/computed';
import { A } from '@ember/array';

export default Controller.extend({
  isAddingBand: false,

  newBandName: '',

  isAddButtonDisabled: empty('newBandName'),

  actions: {
    addBand() {
      this.set('isAddingBand', true);
    },

    cancelAddBand() {
      this.set('isAddingBand', false);
    },

    saveBand(event) {
      event.preventDefault();
      let newBand = Band.create({ name: this.newBandName, songs:  A([])});
      this.model.pushObject(newBand);
      // this.set('newBandName', '');
      this.setProperties({
        newBandName: '',
        isAddingBand: false
      });
      this.transitionToRoute('bands.band.songs', newBand.slug);
    }

  }
});
