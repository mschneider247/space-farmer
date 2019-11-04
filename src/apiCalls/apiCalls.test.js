import { getRocketData } from './apiCalls';

describe('Get Rocket Data', () => {
  beforeEach(() => {
    const mockRockets = [{id:1}, {id:2}]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockRockets})
      })
    })
  });

  it('Should fetch with the corret URL', () => {
    const url = `https://api.spacexdata.com/v3/rockets`
    getRocketData();
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('Should return an array of rockets to data', () => {
    expect(getRocketData()).resolves.toEqual({data: [{id:1}, {id:2}]})
  })

  it('Should error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getRocketData()).rejects.toEqual(Error('Something went wrong getting your rockets!  Please try again...'))
  })
})