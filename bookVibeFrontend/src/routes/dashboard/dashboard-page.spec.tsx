import DashboardPage from './dashboard-page.tsx';
import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
describe('DashboardPage', () => {
    it('renders the App component', () => {
        const dashboardPage = render(<DashboardPage />)
        expect(dashboardPage).toBeTruthy()
    })
})
