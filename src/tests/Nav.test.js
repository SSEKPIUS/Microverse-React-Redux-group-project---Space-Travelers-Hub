import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/configureStore';
import NavBar from '../components/Nav';

describe('Test snapshot component of Navbar', () => {
  it('Renders correctly of nav bar', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
