var GunTransport = require('../node')

describe('GunTransport tests', ()=>{
	it('Replicate action results in action emitted', ()=>{
		var t = new GunTransport();
		var action = {
			id:'abc',
			action: {
				type:'ACTION_NAME'
			}
		}

		var mock = jest.fn()
		t.on('action', mock)
		t.replicate(action)
		expect(mock).toBeCalledWith(action)
	})
})