import Wrapper from "./wrapper/wrapper";
import AvicennaAI from "./avicenna-chat/avicenna-chat";
import SignForm from "./registration/registr";
import SignFormforDoctor from "./registration-doctor/registrtation-doctor";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function AppComponent() {
    return (
        <>
            <Router>
                <Routes>

                    <Route path="/" element={<SignForm />} />
                    <Route path="/wrapper" element={<Wrapper />} />
                    <Route path="/regisfordoc" element={<SignFormforDoctor />} />
                    <Route path="/chat" element={<AvicennaAI />} />
                </Routes>
            </Router>

        </>
    );
}

export default AppComponent;