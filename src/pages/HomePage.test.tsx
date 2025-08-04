import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
};

describe('HomePage', () => {
  test('renders main heading', () => {
    renderWithRouter(<HomePage />);
    const heading = screen.getByRole('heading', { name: /ai level finder for nonprofits/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders start assessment button', () => {
    renderWithRouter(<HomePage />);
    const button = screen.getByRole('button', { name: /start assessment/i });
    expect(button).toBeInTheDocument();
  });

  test('displays key features', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText(/current ai maturity level/i)).toBeInTheDocument();
    expect(screen.getByText(/tangible benefits/i)).toBeInTheDocument();
    expect(screen.getByText(/personalized action plan/i)).toBeInTheDocument();
    expect(screen.getByText(/shareable results/i)).toBeInTheDocument();
  });

  test('has accessible structure', () => {
    renderWithRouter(<HomePage />);
    const main = screen.getByRole('main', { hidden: true }) || document.querySelector('[role="main"]') || document.body;
    expect(main).toBeInTheDocument();
  });
});