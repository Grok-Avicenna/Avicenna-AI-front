import './avicenna-chat.css';
import logo from '../../assets/logochat.svg';
import arrow from '../../assets/Arrow_left.svg';
import plusIcon from '../../assets/plusIcon.svg';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown'
import loadingGif from '../../assets/typing.gif';


const genAI = new GoogleGenerativeAI('AIzaSyBUCNEsB2N67pwWt3YXWHOtyUOr77WKr08');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

function AvicennaAI() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        setMessages(savedMessages);
    }, []);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);

    async function aiRun() {
        if (!text.trim()) return;

        setText('');
        setLoading(true);

        const userMessage = {
            date: new Date().toLocaleTimeString(),
            message: text,
            id: Date.now(),
            type: 'user'
        };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        try {
            const result = await model.generateContent(text);
            const response = await result.response;
            const geminiMessage = {
                date: new Date().toLocaleTimeString(),
                message: await response.text(),
                id: Date.now(),
                type: 'gemini'
            };
            setMessages(prevMessages => [...prevMessages, geminiMessage]);
        } catch (error) {
            console.error('Error fetching Gemini response:', error);
        } finally {
            setLoading(false);
        }
    }

    const TruncatedText = ({ text, maxWords }) => {
        const words = text.split(' ');

        if (words.length <= maxWords) {
            return <span className="">{text}</span>;
        }

        const truncated = words.slice(0, maxWords).join(' ') + '...';
        return <span>{truncated}</span>;
    };
    const firstAIMessage = messages.find(m => m.type === 'gemini');

    return (

        <div className="w-full h-screen">
            <header className="w-[80%] h-[90px] bg-[#0855B1] fixed top-0 right-0">
                <div className="flex items-center gap-[29px] ml-[30px] mt-4 ">
                    <img src={logo} className="w-[50px]" alt="" />
                    <p className="text-white text-[22px]">Avicenna AI</p>
                </div>
            </header>
            <aside className="w-[20%] h-screen fixed top-0 left-0 bg-aside">
                <NavLink to={'/'}>
                    <img src={arrow} alt="" className='w-[40px] mb-3 mt-[39px] ml-4' />
                </NavLink>
                <div className="flex flex-col gap-4">
                    {firstAIMessage && (
                        <div className="w-full h-[100px] bg-[#0855B1] text-white flex flex-row items-center gap-3">
                            <img src={logo} className="w-[50px] ml-3 cursor-pointer" alt="" />
                            <div>
                                <p className="text-[17px] font-semibold">Avicenna AI</p>
                                <TruncatedText text={firstAIMessage.message} maxWords={7} />
                            </div>
                        </div>
                    )}
                </div>
            </aside>
            <main className="w-[80%] ml-[20%] mt-[80px] pb-28 text-white pt-[20px]">
                <div className="w-full">
                    <div className='w-[85%] m-auto'>
                        <div className="flex flex-col gap-1">
                            {messages.map((m, index) => (
                                <div key={m.id} className={`avicenna-chat-message ${m.type === 'user' ? 'avicenna-chat-user-message' : 'avicenna-chat-gemini-message'}`}>
                                    {m.type === 'user' ? (
                                        <div className="flex justify-end">
                                            <div className="max-w-[450px] px-4 py-2 rounded-xl bg-blue-600 text-white">
                                                <ReactMarkdown>{m.message}</ReactMarkdown>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-start">
                                            <div className="max-w-[450px] px-4 py-2 rounded-xl bg-blue-200 text-black">
                                                <ReactMarkdown>{m.message}</ReactMarkdown>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start mt-10">
                                    <img src={loadingGif} alt="Loading..." className="w-[50px]" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="fixed bottom-0 right-0 w-[80%] h-[90px] bg-white">
                <div className="flex flex-row items-center justify-center gap-[30px] mt-[20px]">
                    <img className="w-[50px]" src={plusIcon} alt="" />
                    <input onChange={e => setText(e.target.value)} value={text} type="text" className='pl-3 input_chat' />
                    <button onClick={() => aiRun()} className="send-btn"></button>
                </div>
            </footer>
        </div>
    );
}

export default AvicennaAI;
