import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const MotionCard = motion.div;
    const cardMotionProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.95 },
    };

    return (
        <div className="bg-[#fff4f6] min-h-screen text-[#4a2135] selection:bg-[#ff7294] selection:text-[#4d001c] font-['Plus_Jakarta_Sans'] pb-24 relative z-10 overflow-hidden">
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
                            <Link to="/pickup" className="group block relative rounded-4xl p-8 shadow-xl cursor-pointer overflow-hidden h-full bg-[#ffc5a7]/90 border border-white/60">
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
                            <Link to="/flames" className="group block relative rounded-4xl p-8 shadow-xl cursor-pointer overflow-hidden h-full bg-[#c39fff]/85 border border-white/60">
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
        </div>
    );
}