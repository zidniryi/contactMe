import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import store from '../redux/store';
import LoaderApp from '../components/LoaderApp';

jest.useFakeTimers();
jest.mock('@react-navigation/native', () => ({
  useNavigation: component => component,
}));

describe('LoaderAppChange', () => {
  configure({adapter: new Adapter()});
  const wrapper = shallow(
    <Provider store={store}>
      <LoaderApp />
    </Provider>,
  );
  const rendered = renderer.create(
    <Provider store={store}>
      <LoaderApp />
    </Provider>,
  );

  it('renders correctly LoaderAppChange ', () => {
    expect(rendered.toJSON()).toBeTruthy();
  });

  it('should render component View', () => {
    expect(wrapper.find('View').exists);
  });
  it('should render component ActivityIndicator', () => {
    expect(wrapper.find('ActivityIndicator').exists);
  });

  it('should render component StyleSheet', () => {
    expect(wrapper.find('StyleSheet').exists);
  });
});
