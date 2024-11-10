import Dashboard from './dashboard.tsx';
import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
describe('App', () => {
    it('renders the App component', () => {
        const dashboardComponent = render(<Dashboard />)
        expect(dashboardComponent).toBeTruthy()
    })
})
