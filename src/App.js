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
                costPerMile={25}
                isRoundTrip={isRoundTrip}
                setIsRoundTrip={setIsRoundTrip}
            />
            <Map
                home={{
                    lng: 17.980780, 
                    lat: 59.367067,
                    address: 'Ingrid Bergmans väg 11, 169 40 Solna, Sweden',
                }}
                zoom={14}
                costPerMile={25}
                isRoundTrip={isRoundTrip}
                setCost={setCost}
                setMapError={setMapError}
            />
        </div>
    );
};

export default App;
