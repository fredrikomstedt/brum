import { render, screen } from '@testing-library/react';
import InfoText from './infoText';

const text = 'One scoop - $1, Two scoops - $1.75';
test('renders text correctly', () => {
    render(<InfoText text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
});
