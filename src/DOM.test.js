import React from 'react';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Leaderboard from './components/Leaderboard'
import Navigationbar from './components/Navigationbar';
import { store } from './index'
import Login from './components/Login';



describe('Testing DOM elements', () => {
    it('will create create snapshot', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })



    it('Test Navigationbar', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Navigationbar />
                </Provider>
            </MemoryRouter>
        );

        const nav1 = component.getByTestId('MainPage')
        expect(nav1).toBeInTheDocument()

        const nav2 = component.getByTestId('leaderboard')
        expect(nav2).toBeInTheDocument()

        const nav3 = component.getByTestId('new')
        expect(nav3).toBeInTheDocument()

        const img = component.getByTestId('logout')
        expect(img).toBeInTheDocument()
    })

    it('Test Login, login button is not present', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        const element = component.getByTestId('user')
        expect(element).toBeInTheDocument()

        const login = component.queryAllByTestId('login')
        expect(login.length).not.toEqual(0)
    })
});