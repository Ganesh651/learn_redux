import { render, screen } from '@testing-library/react';
// import App from './App';
import CounterApp from './components/CounterApp';

test('renders learn react link', () => {
  render(<CounterApp />);
  const linkElement = screen.getByText(/Increase/);
  expect(linkElement).toBeInTheDocument();
});
