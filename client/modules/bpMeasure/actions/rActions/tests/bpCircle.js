import { expect } from 'chai'
import * as types from '../../../constants/bpCircle'
import * as rActions from '../bpCircle'

describe('bpCircle rAction',() => {
  describe('startDiscovery', () => {
    it('should create START_DISCOVERY action', () => {
      expect(rActions.startDiscovery()).to.deep.equal({
        type: types.START_DISCOVERY
      })
    })
  })

  describe('discoveryFailure', () => {
    it('should create DISCOVERY_FAILURE action', () => {
      expect(rActions.discoveryFailure()).to.deep.equal({
        type: types.DISCOVERY_FAILURE
      })
    })
  })

  describe('startConnect', () => {
    it('should create START_CONNECT action', () => {
      expect(rActions.startConnect()).to.deep.equal({
        type: types.START_CONNECT
      })
    })
  })

  describe('connectSuccess', () => {
    it('should create CONNECT_SUCCESS action with object', () => {
      const device = {
        name: 'BP3L',
        address: '123-123-123-123',
      }
      expect(rActions.connectSuccess(device)).to.deep.equal({
        type: types.CONNECT_SUCCESS,
        device
      })
    })
  })

  describe('connectFailure', () => {
    it('should create CONNECT_FAILURE action', () => {
      expect(rActions.connectFailure()).to.deep.equal({
        type: types.CONNECT_FAILURE
      })
    })
  })

  describe('disConnect', () => {
    it('should create DISCONNECT action', () => {
      expect(rActions.disConnect()).to.deep.equal({
        type: types.DISCONNECT
      })
    })
  })

  describe('stopDiscovery', () => {
    it('should create STOP_DISCOVERY action', () => {
      expect(rActions.stopDiscovery()).to.deep.equal({
        type: types.STOP_DISCOVERY
      })
    })
  })

  describe('startMeasure', () => {
    it('should create START_MEASURE action', () => {
      expect(rActions.startMeasure()).to.deep.equal({
        type: types.START_MEASURE,
        measureValue: 0
      })
    })
  })

  describe('measureDone', () => {
    it('should create MEASURE_DONE action', () => {
      expect(rActions.measureDone()).to.deep.equal({
        type: types.MEASURE_DONE,
        measureValue: 0
      })
    })
  })
})
