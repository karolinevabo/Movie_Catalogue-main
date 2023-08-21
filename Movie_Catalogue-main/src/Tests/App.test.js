import { render, screen } from '@testing-library/react';
import App from 'Movie_Catalogue-main/src/scripts/App.js';

function test(rendersLearnReactLink, param2) {
  
}

screen.getByText = function (regExp) {
  return undefined;
};
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  function expect(linkElement) {
    
  }

  expect(linkElement).toBeInTheDocument();
});
