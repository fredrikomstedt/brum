import { render, screen } from '@testing-library/react';
import { Title, Footer, HeadingDivider } from './interface';

const text = 'Ice Cream Shop';

test('title renders title correctly', () => {
    render(<Title title={text} />);
    const titleElement = screen.getByText(text);
    expect(titleElement).toBeInTheDocument();
});

test('footer renders copyright', () => {
    render(<Footer />);
    const footerElement = screen.getByText('©', { exact: false });
    expect(footerElement).toBeInTheDocument();
});

test('heading divider renders text', () => {
    render(<HeadingDivider heading={text} />);
    const headingElement = screen.getByText(text, { exact: false });
    expect(headingElement).toBeInTheDocument();
});
