import { render, screen } from '@testing-library/react';
import PriceFromMapCalculator from './priceFromMapCalculator';

const cost = 5;
const isRoundTrip = false;
const setIsRoundTrip = jest.fn();

test('renders info text', () => {
    render(
        <PriceFromMapCalculator
            cost={cost}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );

    const textComponent = screen.getByText('🗺️', { exact: false });
    expect(textComponent).toBeInTheDocument();
});

test('renders info text even when cost is null', () => {
    render(
        <PriceFromMapCalculator
            cost={null}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );

    const textComponent = screen.getByText('🗺️', { exact: false });
    expect(textComponent).toBeInTheDocument();
});

test('renders toggle', () => {
    render(
        <PriceFromMapCalculator
            cost={cost}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );

    const toggleComponent = screen.getByRole('switch');
    expect(toggleComponent).toBeInTheDocument();
});

test('renders toggle even when cost is null', () => {
    render(
        <PriceFromMapCalculator
            cost={null}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );

    const toggleComponent = screen.getByRole('switch');
    expect(toggleComponent).toBeInTheDocument();
});

test('does not render cost if null', () => {
    render(
        <PriceFromMapCalculator
            cost={null}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );

    const textComponent = screen.queryByText('💰', { exact: false });
    expect(textComponent).not.toBeInTheDocument();
});

test('renders cost if not null', () => {
    render(
        <PriceFromMapCalculator
            cost={cost}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );

    const textComponent = screen.getByText(cost, { exact: false });
    expect(textComponent).toBeInTheDocument();
});
