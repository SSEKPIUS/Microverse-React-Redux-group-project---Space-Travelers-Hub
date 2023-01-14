import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './App';
=======
import App from './components/App';
>>>>>>> 20-team3-1pt-create-basic-structure-for-dragons-setup

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
