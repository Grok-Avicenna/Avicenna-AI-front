import Wrapper from "./wrapper/wrapper";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function AppComponent() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Wrapper />} />
                </Routes>
            </Router>

        </>
    );
}

export default AppComponent;