import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('Stay sparkling! ✨');
    const MotionCard = motion.div;
    const cardMotionProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.95 },
    };

    const toggleHeartMessage = () => {
        const messages = ['I love you!', "You're amazing!", 'Stay sparkling!', 'You got this!', 'XOXO ❤️'];
        setPopupMessage(messages[Math.floor(Math.random() * messages.length)]);
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000);
    };

    return (
        <div className="bg-[#fff4f6] min-h-screen text-[#4a2135] selection:bg-[#ff7294] selection:text-[#4d001c] font-['Plus_Jakarta_Sans'] pb-24 relative z-0 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-48 right-1/4 opacity-20 pointer-events-none">
                {/* SVG for a large faint heart */}
                <svg width="300" height="300" viewBox="0 0 24 24" fill="#ff7294" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
            <div className="absolute top-24 right-8 pointer-events-none opacity-50">
                {/* Smile emoji or SVG */}
                <span className="text-4xl">😊</span>
            </div>

            {/* Emoji Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
                <div className="absolute top-20 left-10 text-4xl opacity-30 rotate-12">💖</div>
                <div className="absolute top-40 right-20 text-5xl opacity-20 -rotate-12">✨</div>
                <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-30 rotate-45">🔥</div>
                <div className="absolute bottom-32 right-10 text-5xl opacity-20 -rotate-6">💘</div>
                <div className="absolute top-1/2 left-4 text-3xl opacity-25">😊</div>
                <div className="absolute top-1/3 right-1/3 text-4xl opacity-20 rotate-12">💌</div>
            </div>

            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-[#fff4f6]/80 backdrop-blur-2xl rounded-b-[2.5rem] shadow-[0_12px_32px_rgba(74,33,53,0.06)]">
                <div className="text-2xl font-black italic text-transparent bg-clip-text bg-linear-to-r from-[#b7004d] to-[#ff7294] tracking-tighter">
                    Love Lab
                </div>
                <div className="flex items-center gap-6 relative">
                    <button className="relative group outline-none focus:outline-none" onClick={toggleHeartMessage}>
                        <div className="transition-transform active:scale-90 hover:scale-110">
                            <svg fill="#FF3377" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                <circle cx="9" cy="9" fill="white" r="1"></circle>
                                <circle cx="15" cy="9" fill="white" r="1"></circle>
                                <path d="M9 13C9 13 10.5 14.5 12 14.5C13.5 14.5 15 13 15 13" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1"></path>
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

            {/* Main Content */}
            {/* Main Content */}
            <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto overflow-hidden relative">

                {/* Restored Floating Decor Elements */}
                <div className="absolute top-20 right-10 opacity-20 pointer-events-none rotate-12">
                    <span className="material-symbols-outlined text-8xl text-[#b7004d]" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
                </div>
                <div className="absolute bottom-40 left-0 opacity-10 pointer-events-none -rotate-45">
                    <span className="material-symbols-outlined text-9xl text-[#7234cf]" style={{ fontVariationSettings: '"FILL" 1' }}>colors_spark</span>
                </div>

                {/* Hero Title */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-4">
                        Choose Your <span className="text-[#b7004d] italic">Vibe</span>
                    </h1>
                    <p className="text-[#7d4d62] max-w-xl mx-auto text-lg">Ignite sparks and play the most addictive romance games ever built.</p>
                </div>

                {/* Fixed Bento Grid - Split into Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-8">
                        {/* Love Calculator */}
                        <MotionCard {...cardMotionProps} className="w-full">
                            <Link to="/love" className="group block relative rounded-4xl p-8 shadow-xl cursor-pointer overflow-hidden h-full bg-[#ffecf1]">
                                {/* Restored Background Circle */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br from-[#b7004d] to-[#ff7294] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div>
                                        <div className="w-20 h-20 bg-[#b7004d] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#b7004d]/30 group-hover:rotate-6 transition-transform">
                                            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
                                        </div>
                                        <h3 className="text-3xl font-black mb-3">Love Calculator</h3>
                                        <p className="text-[#7d4d62] leading-relaxed">Enter two names and find out your cosmic compatibility score in seconds.</p>
                                    </div>
                                    <div className="mt-12 flex items-center gap-3 text-[#b7004d] font-bold tracking-widest uppercase text-xs">
                                        Play Now <span className="material-symbols-outlined">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        </MotionCard>

                        {/* Pickup Line */}
                        <MotionCard {...cardMotionProps} className="w-full">
                            <Link to="/pickup" className="group block relative rounded-4xl p-8 shadow-xl cursor-pointer overflow-hidden h-full bg-[#ffc5a7]/40">
                                {/* Restored Background Quotes */}
                                <div className="absolute top-4 right-4 opacity-10">
                                    <span className="material-symbols-outlined text-6xl">format_quote</span>
                                </div>

                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div>
                                        <div className="w-16 h-16 bg-[#864d2c] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#864d2c]/30 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat_bubble</span>
                                        </div>
                                        <h3 className="text-3xl font-black mb-3">Pickup Line</h3>
                                        <p className="text-[#7d4d62] leading-relaxed">Endless supply of smooth, cheesy, and hilarious lines to break the ice.</p>
                                    </div>
                                    <div className="mt-8 flex items-center gap-3 text-[#864d2c] font-bold tracking-widest uppercase text-xs">
                                        Get Inspired <span className="material-symbols-outlined">auto_awesome</span>
                                    </div>
                                </div>
                            </Link>
                        </MotionCard>
                    </div>

                    {/* RIGHT COLUMN (Offset downwards on desktop) */}
                    <div className="flex flex-col gap-8">
                        {/* FLAMES */}
                        <MotionCard {...cardMotionProps} className="w-full">
                            <Link to="/flames" className="group block relative rounded-4xl p-8 shadow-xl cursor-pointer overflow-hidden h-full bg-[#c39fff]/30">
                                {/* Restored Background Circle */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-linear-to-tr from-[#7234cf] to-[#c39fff] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div>
                                        <div className="w-16 h-16 bg-[#7234cf] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#7234cf]/30 group-hover:-rotate-6 transition-transform">
                                            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
                                        </div>
                                        <h3 className="text-3xl font-black mb-3 italic">FLAMES</h3>
                                        <p className="text-[#7d4d62] leading-relaxed">Friends, Lovers, Affection, Marriage, Enmity, or Siblings? The classic game reinvented.</p>
                                    </div>
                                    <div className="mt-8 flex items-center gap-3 text-[#7234cf] font-bold tracking-widest uppercase text-xs">
                                        Start Game <span className="material-symbols-outlined">bolt</span>
                                    </div>
                                </div>
                            </Link>
                        </MotionCard>

                        {/* Date Idea */}
                        <MotionCard {...cardMotionProps} className="w-full">
                            <Link to="/date" className="group block relative rounded-4xl p-8 shadow-xl cursor-pointer overflow-hidden h-full bg-[#ffd0e2]">
                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div>
                                        <div className="w-20 h-20 bg-[#ff7294] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#ff7294]/30 group-hover:rotate-12 transition-transform">
                                            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>restaurant</span>
                                        </div>
                                        <h3 className="text-3xl font-black mb-3">Date Idea</h3>
                                        <p className="text-[#7d4d62] leading-relaxed">From cozy nights in to wild adventures out. We curate the perfect plan.</p>
                                    </div>
                                    <div className="mt-12 flex items-center gap-3 text-[#4a2135] font-bold tracking-widest uppercase text-xs">
                                        Explore <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                </div>
                            </Link>
                        </MotionCard>
                    </div>

                </div>
            </main>

            {/* BottomNavBar */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-50 flex justify-around items-end p-2 lg:p-3 rounded-[2.5rem] lg:rounded-full bg-[#fff4f6]/80 backdrop-blur-2xl shadow-2xl border border-white/20">
                <Link to="/" className="flex flex-col items-center justify-center text-[#b7004d] p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Home</span>
                </Link>
                <Link to="/love" className="flex flex-col items-center justify-center text-[#4a2135]/50 p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Calc</span>
                </Link>
                <Link to="/flames" className="flex flex-col items-center justify-center text-[#4a2135]/50 p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">local_fire_department</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Flames</span>
                </Link>
                <Link to="/pickup" className="flex flex-col items-center justify-center text-[#4a2135]/50 p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">chat_bubble</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Pickup</span>
                </Link>
            </nav>
        </div>
    );
}