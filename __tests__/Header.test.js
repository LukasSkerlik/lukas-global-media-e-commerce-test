import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SearchProvider } from "../context/SearchContext";
import Header from '../components/headers/Header';

test('renders navigation links and search input', () => {
  render(
    <SearchProvider>
      <Header />
    </SearchProvider>
  );

  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Products")).toBeInTheDocument();
  expect(screen.getByText("Newsletter")).toBeInTheDocument();
});