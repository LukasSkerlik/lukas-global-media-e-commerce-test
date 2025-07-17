import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { SearchProvider } from "../context/SearchContext";
import ProductsPage from "../pages/products";

const mockProducts = [
  {
    id: 1,
    title: "Product A",
    price: 10,
    description: "A",
    image: "A.jpg",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Product B",
    price: 20,
    description: "B",
    image: "B.jpg",
    category: "jewelery",
  },
  {
    id: 3,
    title: "Product C",
    price: 30,
    description: "C",
    image: "C.jpg",
    category: "men's clothing",
  },
];
const mockCategories = ["men's clothing", "jewelery"];

beforeAll(() => {
  global.fetch = jest.fn((url) => {
    if (url?.toString().endsWith("/products")) {
      return Promise.resolve({ json: () => Promise.resolve(mockProducts) });
    }
    if (url?.toString().endsWith("/products/categories")) {
      return Promise.resolve({ json: () => Promise.resolve(mockCategories) });
    }
    return Promise.reject(new Error("Unknown endpoint"));
  });
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("ProductsPage filtering", () => {
  test("filters by category", async () => {
    render(
      <SearchProvider>
        <ProductsPage />
      </SearchProvider>
    );

    await waitFor(() => screen.getByText("men's clothing"));

    fireEvent.click(screen.getByText("men's clothing"));

    await waitFor(() => {
      expect(screen.getByText("Product A")).toBeInTheDocument();
      expect(screen.getByText("Product C")).toBeInTheDocument();
    });
    expect(screen.queryByText("Product B")).toBeNull();
  });
});
