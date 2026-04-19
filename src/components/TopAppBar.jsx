import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TopAppBar() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('Stay sparkling! ✨');
    const popupTimeoutRef = useRef(null);

    const toggleHeartMessage = () => {
        const messages = ['I love you!', "You're amazing!", 'Stay sparkling!', 'You got this!', 'XOXO ❤️'];

        if (popupTimeoutRef.current) {
            window.clearTimeout(popupTimeoutRef.current);
        }

        setPopupMessage(messages[Math.floor(Math.random() * messages.length)]);
        setPopupVisible(true);
        popupTimeoutRef.current = window.setTimeout(() => {
            setPopupVisible(false);
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (popupTimeoutRef.current) {
                window.clearTimeout(popupTimeoutRef.current);
            }
        };
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-[#fff4f6]/95 backdrop-blur-2xl rounded-b-[2.5rem] shadow-[0_12px_32px_rgba(74,33,53,0.10)] border-b border-white/70">
            <Link to="/" className="flex items-center gap-2">
                <img src="/logo.svg" alt="Love Lab Logo" className="w-8 h-8 md:w-10 md:h-10 animate-[float_6s_ease-in-out_infinite]" />
                <span className="text-2xl font-black italic text-transparent bg-clip-text bg-linear-to-r from-[#b7004d] to-[#ff7294] tracking-tighter pr-2">
                    Love Lab
                </span>
            </Link>
            <div className="flex items-center gap-6 relative">
                <button className="relative group outline-none focus:outline-none" onClick={toggleHeartMessage} type="button">
                    <div className="transition-transform active:scale-90 hover:scale-110">
                        <svg fill="#FF3377" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            <circle cx="9" cy="9" fill="white" r="1" />
                            <circle cx="15" cy="9" fill="white" r="1" />
                            <path d="M9 13C9 13 10.5 14.5 12 14.5C13.5 14.5 15 13 15 13" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1" />
                        </svg>
                    </div>
                    {popupVisible && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap bg-[#FF3377] text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg z-60">
                            {popupMessage}
                        </div>
                    )}
                </button>
            </div>
        </header>
    );
}
