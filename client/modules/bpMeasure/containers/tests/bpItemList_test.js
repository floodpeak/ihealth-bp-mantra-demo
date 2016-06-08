const { describe, it } = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import {composer, depsMapper} from '../newpost';

describe('component', () => {
  describe('composer', () => {
    it('should get SAVING_ERROR from local state', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});

      composer({context}, spy());

      const args = LocalState.get.args[0];
      expect(args).to.have.length(1);
      expect(args[0]).to.be.equal('SAVING_ERROR');
    });
  });
});
