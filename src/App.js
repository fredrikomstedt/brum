import Map from 'components/map/map';

import './App.css';

const App = () => (
    <div className="app">
        <div></div>
        <Map
            home={{
                lng: 18.042198,
                lat: 59.396539,
                address: 'Mörbyhöjden 16, 182 32 Danderyd, Sweden',
            }}
            zoom={15}
            costPerMile={18.5}
            isRoundTrip={true}
        />
    </div>
);

export default App;
