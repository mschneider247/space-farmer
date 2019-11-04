import React from 'react';
import { shallow } from 'enzyme';
import { Overview} from './Overview';

describe('Overview Tests', () => {
    it('Overview should match its snapshot', () => {
      const proposals = [{key: 1, 
                          id: 1, 
                          rocket: {payloads : [{id: 1, lb: 100}, {id: 2}]}, 
                          destination : 1,
                          supplies: {supplyWeight : 100}
                        }];
      const wrapper = shallow(<Overview proposals={proposals}/>)
      expect(wrapper).toMatchSnapshot();
    });
})