import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  navigation: {
    sidebarOpened: false,
    activeItem: '/',
    sidebarPosition: 'left',
    sidebarVisibility: 'show',
  },
  layout: {
    dashboardTheme: 'dark',
    themeColor: '#fff',
  }
};

test('renders children correctly', () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Layout>
          <div data-testid="child" />
        </Layout>
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId('child')).toBeInTheDocument();
});
