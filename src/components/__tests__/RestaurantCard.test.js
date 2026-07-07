import { render, screen } from '@testing-library/react';
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

it('should render RestaurantCard component with props Data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it('should render RestaurantCard component with Promoted Label', () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const labelElement = screen.getByText('Promoted');
  expect(labelElement.tagName).toBe('LABEL');
});
