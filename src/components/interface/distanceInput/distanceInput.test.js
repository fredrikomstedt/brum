import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DistanceInput from './distanceInput';

let value = '33';
const nonNumericText = '-dsa';
const setValue = jest.fn((newValue) => {
    value = newValue;
});

test('renders as input', () => {
    render(<DistanceInput value={value} setValue={setValue} />);
    const inputComponent = screen.getByRole('textbox');
    expect(inputComponent).toBeInTheDocument();
});

test('renders placeholder text', () => {
    render(<DistanceInput value={''} setValue={setValue} />);
    const inputComponent = screen.getByPlaceholderText('0');
    expect(inputComponent).toBeInTheDocument();
});

test('renders value', () => {
    render(<DistanceInput value={value} setValue={setValue} />);
    const inputComponent = screen.getByDisplayValue(value);
    expect(inputComponent).toBeInTheDocument();
});

test('handleChange is called on change', () => {
    render(<DistanceInput value={value} setValue={setValue} />);
    const inputComponent = screen.getByRole('textbox');
    userEvent.type(inputComponent, value);
    expect(setValue).toHaveBeenCalledTimes(value.length);
});

test('display value changes on change', () => {
    render(<DistanceInput value={value} setValue={setValue} />);
    const inputComponent = screen.getByRole('textbox');
    userEvent.type(inputComponent, value);
    expect(inputComponent).toHaveValue(value);
});

test('display value does not change if non-numeric text is entered', () => {
    render(<DistanceInput value={value} setValue={setValue} />);
    const inputComponent = screen.getByRole('textbox');
    userEvent.type(inputComponent, nonNumericText);
    expect(inputComponent).toHaveValue(value);
});
