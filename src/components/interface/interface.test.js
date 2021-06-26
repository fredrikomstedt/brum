import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Interface, { Title, Footer, HeadingDivider } from './interface';

const distanceTestId = 'distanceCalculator';
jest.mock(
    './priceFromDistanceCalculator/priceFromDistanceCalculator',
    () => () => <div data-testid={distanceTestId} />
);
const mapTestId = 'mapCalculator';
jest.mock('./priceFromMapCalculator/priceFromMapCalculator', () => () => (
    <div data-testid={mapTestId} />
));

const text = 'Ice Cream Shop';
const cost = 10;
const mapError = 'No route found';
const costPerMile = 10;
const isRoundTrip = false;
const setIsRoundTrip = jest.fn();

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

test('renders title on desktop interface', () => {
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const titleComponent = screen.getByText('Brum', { exact: false });
    expect(titleComponent).toBeInTheDocument();
});

test('does not render error if error is null', () => {
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const errorComponent = screen.queryByText(mapError);
    expect(errorComponent).not.toBeInTheDocument();
});

test('renders error if error is not null', () => {
    render(
        <Interface
            cost={cost}
            mapError={mapError}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const errorComponent = screen.getByText(mapError, { exact: false });
    expect(errorComponent).toBeInTheDocument();
});

test('renders heading divider on desktop interface', () => {
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const dividerComponent = screen.getByText('or', { exact: false });
    expect(dividerComponent).toBeInTheDocument();
});

test('renders footer on desktop interface', () => {
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const dividerComponent = screen.getByText('Fredrik', { exact: false });
    expect(dividerComponent).toBeInTheDocument();
});

test('renders distanceCalculator AND mapCalculator on desktop interface', () => {
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const distanceComponent = screen.getByTestId(distanceTestId);
    const mapComponent = screen.getByTestId(mapTestId);
    expect(distanceComponent).toBeInTheDocument();
    expect(mapComponent).toBeInTheDocument();
});

test('renders title on mobile interface', () => {
    global.innerWidth = 500;
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const titleComponent = screen.getByText('Brum', { exact: false });
    expect(titleComponent).toBeInTheDocument();
});

test('does not render heading divider on mobile interface', () => {
    global.innerWidth = 500;
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const dividerComponent = screen.queryByText('or', { exact: false });
    expect(dividerComponent).not.toBeInTheDocument();
});

test('renders footer on mobile interface', () => {
    global.innerWidth = 500;
    render(
        <Interface
            cost={cost}
            mapError={mapError}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const dividerComponent = screen.getByText('Fredrik', { exact: false });
    expect(dividerComponent).toBeInTheDocument();
});

test('renders only mapCalculator by default on mobile interface', () => {
    global.innerWidth = 500;
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const distanceComponent = screen.queryByTestId(distanceTestId);
    const mapComponent = screen.getByTestId(mapTestId);
    expect(distanceComponent).not.toBeInTheDocument();
    expect(mapComponent).toBeInTheDocument();
});

test('renders toggle on mobile interface', () => {
    global.innerWidth = 500;
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const toggleComponent = screen.getByRole('switch');
    expect(toggleComponent).toBeInTheDocument();
});

test('renders only distanceCalculator on mobile interface if toggle is clicked', () => {
    global.innerWidth = 500;
    render(
        <Interface
            cost={cost}
            mapError={null}
            costPerMile={costPerMile}
            isRoundTrip={isRoundTrip}
            setIsRoundTrip={setIsRoundTrip}
        />
    );
    const toggleComponent = screen.getByRole('switch');
    userEvent.click(toggleComponent);
    const distanceComponent = screen.getByTestId(distanceTestId);
    const mapComponent = screen.queryByTestId(mapTestId);
    expect(distanceComponent).toBeInTheDocument();
    expect(mapComponent).not.toBeInTheDocument();
});
