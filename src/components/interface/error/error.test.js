import { render, screen } from '@testing-library/react';
import Error from './error';

const errorText = 'The ice cream has melted!';

test('error is rendered correctly', () => {
    render(<Error error={errorText} />);

    const errorElement = screen.getByText(errorText, { exact: false });
    expect(errorElement).toBeInTheDocument();
});

test('info is rendered correctly', () => {
    render(<Error error={errorText} />);

    const infoElement = screen.getByText('Please try', { exact: false });
    expect(infoElement).toBeInTheDocument();
});
