import { render, screen } from '@testing-library/react';
import CostVisualizer from './costVisualizer';

const cost = 1337;

test('Does not render cost if cost is null', () => {
    render(<CostVisualizer cost={null} />);
    const emojiComponent = screen.queryByText('💰', { exact: false });
    expect(emojiComponent).not.toBeInTheDocument();
});

test('renders emoji correctly', () => {
    render(<CostVisualizer cost={cost} />);
    const emojiComponent = screen.getByText('💰', { exact: false });
    expect(emojiComponent).toBeInTheDocument();
});

test('renders cost correctly', () => {
    render(<CostVisualizer cost={cost} />);
    const costComponent = screen.getByText(cost, { exact: false });
    expect(costComponent).toBeInTheDocument();
});

test('renders currency correctly', () => {
    render(<CostVisualizer cost={cost} />);
    const currencyComponent = screen.getByText('kr', { exact: false });
    expect(currencyComponent).toBeInTheDocument();
});
