import Wrapper from "./wrapper/wrapper";
import AvicennaAI from "./avicenna-chat/avicenna-chat";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function AppComponent() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Wrapper />} />
                    <Route path="/chat" element={<AvicennaAI />} />
                </Routes>
            </Router>

        </>
    );
}

export default AppComponent;