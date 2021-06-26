import { render, screen } from '@testing-library/react';
import Toggle from './toggle';

const value = false;
const leftText = 'Chips';
const rightText = 'Popcorn';
const setValue = jest.fn();

test('renders leftText', () => {
    render(
        <Toggle
            leftText={leftText}
            rightText={rightText}
            value={value}
            onChange={setValue}
        />
    );
    const toggleElement = screen.getByText(leftText);
    expect(toggleElement).toBeInTheDocument();
});

test('renders rightText', () => {
    render(
        <Toggle
            leftText={leftText}
            rightText={rightText}
            value={value}
            onChange={setValue}
        />
    );
    const toggleElement = screen.getByText(rightText);
    expect(toggleElement).toBeInTheDocument();
});

test('renders Switch', () => {
    render(
        <Toggle
            leftText={leftText}
            rightText={rightText}
            value={value}
            onChange={setValue}
        />
    );
    const toggleElement = screen.getByRole('switch');
    expect(toggleElement).toBeInTheDocument();
});
