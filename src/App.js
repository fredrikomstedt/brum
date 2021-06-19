import Map from 'components/map/map';

import './App.css';

const App = () => (
    <div className="app">
        <div></div>
        <Map lng={18.042198} lat={59.396539} zoom={15} />
    </div>
);

export default App;
