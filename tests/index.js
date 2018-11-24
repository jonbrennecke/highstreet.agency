/* @flow */
/* global describe, it, expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// $FlowFixMe
describe('TODO', () => {
  // $FlowFixMe
  it('trivial test', () => {
    // $FlowFixMe
    expect(true).toBe(true);
  });
});
