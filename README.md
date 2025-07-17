<h1>Next.js E-commerce Take Home Test</h1>

This is a simple e-commerce web application built to required specifications.

<h2>Overview</h2>

features:
- Navigation with a persistent search bar
- Placeholder Newsletter and Home pages
- Product listing page with a filtering and sorting function, fetching mocked products
- Unit testing

technologies used:
- NextJS
- Pages router
- Typescript
- Css modules
- React useContext for search bar persistence
- Jest and React Testing Library



Setup:

1. Clone the repo:
```bash
git clone https://github.com/LukasSkerlik/lukas-global-media-e-commerce-test.git
cd nextjs-ecommerce
```
2. Install Dependencies
```bash
npm install
```
3. Run the Development Server
```bash
npm run dev
```
4. Run Tests
```bash
npm run test
```

<h2>Explanation and approach</h2>

My approach was simple and straight-forward with focus on functionality, best practices, code quality, performance optimisation and testing over focus on design to showcase my developer skills. Simple design was of course implemented.

As this this was a relatively small project there was an assumption with keeping the scope small, ideally further things would be implemented, such as spinners while components are loading, reusable card in product listing page which could be used in different part of the site, more all-encompassing test coverage and so on.

Trade-offs: as pages router was used as opposed to app router, this site would not scale as well into the future, trading scaling for early simplicity. Similar argument can be made about using react context as opposed to a more complex state handling solution, such as redux. Usage of Css modules as opposed to more complex solutions like Scss or Tailwind or MUI also trades early simplicity for potentially better solution for a large scale project.

<h2>Additional notes:</h2>
This project uses React 18. This is due to difficulties of integrating Jest and NextJS with newest version of React, the official next repo for integrating jest uses react 18 https://github.com/vercel/next.js/tree/canary/examples/with-jest .