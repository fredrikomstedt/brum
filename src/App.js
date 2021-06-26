import Map from 'components/map/map';
import Interface from 'components/interface/interface';
import { useState } from 'react';
import './App.css';

const App = () => {
    const [cost, setCost] = useState(null);
    const [mapError, setMapError] = useState(null);
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    return (
        <div className="app">
            <Interface
                cost={cost}
                mapError={mapError}
                costPerMile={18.5}
                isRoundTrip={isRoundTrip}
                setIsRoundTrip={setIsRoundTrip}
            />
            <Map
                home={{
                    lng: 18.042198,
                    lat: 59.396539,
                    address: 'Mörbyhöjden 16, 182 32 Danderyd, Sweden',
                }}
                zoom={14}
                costPerMile={18.5}
                isRoundTrip={isRoundTrip}
                setCost={setCost}
                setMapError={setMapError}
            />
        </div>
    );
};

export default App;
