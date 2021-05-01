import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import store from '../redux/store';
import Title from '../components/Title';

jest.useFakeTimers();
jest.mock('@react-navigation/native', () => ({
  useNavigation: component => component,
}));

describe('TitleChange', () => {
  configure({adapter: new Adapter()});
  const wrapper = shallow(
    <Provider store={store}>
      <Title />
    </Provider>,
  );
  const rendered = renderer.create(
    <Provider store={store}>
      <Title />
    </Provider>,
  );

  it('renders correctly TitleChange ', () => {
    expect(rendered.toJSON()).toBeTruthy();
  });

  it('should render component View', () => {
    expect(wrapper.find('View').exists);
  });
  it('should render component Text', () => {
    expect(wrapper.find('Text').exists);
  });

  it('should render component StyleSheet', () => {
    expect(wrapper.find('StyleSheet').exists);
  });
});
