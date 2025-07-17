import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import ProductGrid from '../components/products/ProductGrid';

const mockProducts = [
  {
    id: 1,
    title: 'Test Product',
    price: 9.99,
    description: 'A test product description.',
    image: 'https://www.placeholder.com/150',
    category: 'test-category',
  },
];

test('renders product information', () => {
  render(<ProductGrid products={mockProducts} />);

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("£9.99")).toBeInTheDocument();
  expect(screen.getByText("A test product description.")).toBeInTheDocument();
});