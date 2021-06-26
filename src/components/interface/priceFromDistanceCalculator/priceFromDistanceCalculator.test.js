import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PriceFromDistanceCalculator from './priceFromDistanceCalculator';

const costPerMile = 10;
const distance = '10';
const cost = 10;

test('does not render cost if null', () => {
    render(<PriceFromDistanceCalculator costPerMile={costPerMile} />);

    const textComponent = screen.queryByText('💰', { exact: false });
    expect(textComponent).not.toBeInTheDocument();
});

test('renders info text', () => {
    render(<PriceFromDistanceCalculator costPerMile={costPerMile} />);

    const textComponent = screen.getByText('length of the trip', {
        exact: false,
    });
    expect(textComponent).toBeInTheDocument();
});

test('renders input field', () => {
    render(<PriceFromDistanceCalculator costPerMile={costPerMile} />);

    const inputComponent = screen.getByRole('textbox');
    expect(inputComponent).toBeInTheDocument();
});

test('renders correct cost when provided input', () => {
    render(<PriceFromDistanceCalculator costPerMile={costPerMile} />);

    const inputComponent = screen.getByRole('textbox');
    userEvent.type(inputComponent, distance);

    const textComponent = screen.getByText(cost, { exact: false });
    expect(textComponent).toBeInTheDocument();
});
