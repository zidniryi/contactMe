import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import store from '../redux/store';
import HeaderApp from '../components/HeaderApp';

jest.useFakeTimers();
jest.mock('@react-navigation/native', () => ({
  useNavigation: component => component,
}));

describe('HeaderApp', () => {
  configure({adapter: new Adapter()});
  const wrapper = shallow(
    <Provider store={store}>
      <HeaderApp />
    </Provider>,
  );
  const rendered = renderer.create(
    <Provider store={store}>
      <HeaderApp />
    </Provider>,
  );

  it('renders correctly ButtonChange Global Componen', () => {
    expect(rendered.toJSON()).toBeTruthy();
  });

  it('should render component View', () => {
    expect(wrapper.find('View').exists);
  });
  it('should render component TouchableOpacity', () => {
    expect(wrapper.find('TouchableOpacity').exists);
  });

  it('should render component Text', () => {
    expect(wrapper.find('Text').exists);
  });

  it('should render component Icon', () => {
    expect(wrapper.find('Icon').exists);
  });

  it('should render component TouchableOpacity', () => {
    expect(wrapper.find('TouchableOpacity').exists);
  });
});
