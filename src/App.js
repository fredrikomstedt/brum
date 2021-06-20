import Map from 'components/map/map';
import Interface from 'components/interface/interface';
import { useState } from 'react';
import './App.css';

const App = () => {
    const [cost, setCost] = useState(null);
    const [mapError, setMapError] = useState(null);
    return (
        <div className="app">
            <Interface cost={cost} mapError={mapError} />
            <Map
                home={{
                    lng: 18.042198,
                    lat: 59.396539,
                    address: 'Mörbyhöjden 16, 182 32 Danderyd, Sweden',
                }}
                zoom={14}
                costPerMile={18.5}
                isRoundTrip={true}
                setCost={setCost}
                setMapError={setMapError}
            />
        </div>
    );
};

export default App;
