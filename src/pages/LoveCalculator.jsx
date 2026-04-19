import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoveCalculator() {
    const AnimatedButton = motion.button;
    const [nameOne, setNameOne] = useState('');
    const [nameTwo, setNameTwo] = useState('');
    const [result, setResult] = useState(null);

    const filledIcon = { fontVariationSettings: '"FILL" 1' };

    const getCheesyMessage = (score) => {
        if (score <= 15) {
            return 'Ayi Baboi! 🙏 Zero workout. Idhi nuvvu choodaledu, nenu choodaledu, evariki choopiyeku a 😉.Better luck next time mawa😁';
        }
        if (score <= 30) {
            return 'Strictly friendzone vibes😿.Better to just go out & eat chettipedu pungulu or SS Biryani alone and cry it out, mawa. 🍗';
        }
        if (score <= 45) {
            return 'Light ga set avvachu😊! Take them for a long bike ride towards marina beach, maybe the breeze will fix your bad luck.';
        }
        if (score <= 60) {
            return '50-50 chance🫣! Ask & take them to out Chettipedu pungulu,cinema at EVP Cinemas, VR or Phoeniox mall to actually impress them. 🍿';
        }
        if (score <= 61) {
            return '50-50 chance🫣! Ask & take them to out Chettipedu pungulu,cinema at EVP Cinemas, VR or Phoeniox mall to actually impress them. 🍿';
        }
        if (score <= 75) {
            return 'Baga set ayyaru! 👀,Inkem po, daily Equitorial,ECE benches daggara muchhatlu💝, chance waste chesukobaku';
        }
        if (score <= 90) {
            return 'Vere level chemistry❤️🧪! 🔥peddha katha mawa mee jodi, dates, trips, full enjoyment🥰.Set cheusko!💝';
        }
        return 'Abba, emi jodi ra!💍 Blockbuster couple. Pelli date eppudu mawa 😍🥰.';
    };

    const calculateLove = () => {
        const cleanOne = nameOne.trim();
        const cleanTwo = nameTwo.trim();

        if (!cleanOne || !cleanTwo) {
            return;
        }

        const combined = `${cleanOne}${cleanTwo}`.toLowerCase().replace(/\s+/g, '');
        let sum = 0;

        for (let i = 0; i < combined.length; i += 1) {
            sum += combined.charCodeAt(i);
        }

        const score = sum % 101;
        setResult({
            score,
            message: getCheesyMessage(score),
        });
    };

    const handleTryAgain = () => {
        setNameOne('');
        setNameTwo('');
        setResult(null);
    };

    return (
        <div className="bg-[#fff4f6] text-[#4a2135] font-['Plus_Jakarta_Sans'] selection:bg-[#ff7294] selection:text-[#4d001c] min-h-screen relative z-10 overflow-hidden pb-28">
            <main className="pt-24 pb-32 px-6 w-full min-h-screen">
                {/* Hero Section */}
                <div className="relative mb-12 text-center max-w-4xl mx-auto">
                    <div className="absolute -top-12 -left-8 w-32 h-32 bg-[#ff7294]/20 rounded-full blur-3xl"></div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c39fff]/30 rounded-full blur-2xl"></div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.1] text-[#b7004d] mb-4 relative z-10">
                        Love Calculator
                    </h1>
                    <p className="text-[#7d4d62] text-base max-w-70 mx-auto leading-relaxed">
                        Discover the digital destiny between you and your crush.
                    </p>
                </div>

                {/* Calculator Bento Grid / Form */}
                <section className="space-y-6 max-w-4xl mx-auto">
                    <div className="bg-[#ffecf1]/95 rounded-4xl p-8 md:p-12 relative overflow-hidden shadow-[0_12px_32px_rgba(74,33,53,0.10)] border border-white/70">
                        <div className="absolute inset-0 bg-linear-to-br from-[#ff7294]/10 to-[#c39fff]/10 opacity-50"></div>

                        <div className="relative">
                            {result === null ? (
                                <div className="space-y-5">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <input
                                            className="w-full h-16 px-7 rounded-full bg-white/90 text-[#4a2135] placeholder:text-[#7d4d62]/55 focus:outline-none focus:ring-2 focus:ring-[#b7004d] text-lg font-semibold"
                                            placeholder="Your Name"
                                            type="text"
                                            value={nameOne}
                                            onChange={(event) => setNameOne(event.target.value)}
                                        />
                                        <input
                                            className="w-full h-16 px-7 rounded-full bg-white/90 text-[#4a2135] placeholder:text-[#7d4d62]/55 focus:outline-none focus:ring-2 focus:ring-[#b7004d] text-lg font-semibold"
                                            placeholder="Crush's Name"
                                            type="text"
                                            value={nameTwo}
                                            onChange={(event) => setNameTwo(event.target.value)}
                                        />
                                    </div>

                                    <AnimatedButton
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full md:w-auto md:min-w-72 py-4 px-8 bg-linear-to-br from-[#b7004d] to-[#a00043] text-[#ffeff0] font-bold text-lg rounded-3xl shadow-lg shadow-[#b7004d]/20 flex items-center justify-center gap-2"
                                        onClick={calculateLove}
                                        type="button"
                                    >
                                        <span className="material-symbols-outlined text-sm text-white" style={filledIcon}>favorite</span>
                                        Calculate Love
                                    </AnimatedButton>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <span className="material-symbols-outlined text-6xl text-[#b7004d] animate-pulse" style={filledIcon}>favorite</span>
                                        <div className="absolute inset-0 bg-[#b7004d] blur-xl opacity-25"></div>
                                    </div>

                                    <span className="text-6xl md:text-8xl font-black text-[#b7004d] tracking-tighter leading-none">
                                        {result.score}%
                                    </span>
                                    <p className="mt-4 text-[#4a2135] font-semibold text-base md:text-lg max-w-2xl">
                                        {result.message}
                                    </p>

                                    <AnimatedButton
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-6 py-3 px-7 bg-white text-[#b7004d] font-bold rounded-full border border-[#ff7294]/50 shadow-sm"
                                        onClick={handleTryAgain}
                                        type="button"
                                    >
                                        Try Again
                                    </AnimatedButton>

                                    <p className="text-xs text-[#7d4d62]/70 mt-4">
                                        100% private. No data is saved, so be honest!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Decorative Card (Editorial Content) */}
                    <div className="bg-[#ffd0e2]/95 rounded-4xl p-6 flex items-center gap-6 overflow-hidden relative border border-white/60 shadow-[0_10px_26px_rgba(74,33,53,0.10)]">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#4d001c] leading-none mb-1">Weekly Romance Tip</h3>
                            <p className="text-sm text-[#6e391a]">Communication is the heartbeat of every great couple.</p>
                        </div>
                        <div className="w-20 h-20 shrink-0 bg-white/20 rounded-xl overflow-hidden rotate-3 shadow-md">
                            <img
                                alt="Couples hands"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxjEmSI16WvysMnACSXgjpflIXdVKmO6ge_9ay7DI3MrZDgCYQd9_ermFx11VJZ31-Ma3CP1cQqGEgr1jKReLPmk9RWsAbg6vtBOAN7Hwsj2bMy9XcO0SOHOeBK3oniJQ1ncAei_7PXxY4j0COqCTMk3xT2usZTavMk0bGzdkWyGNzSePmjNN_ffFOQ4koJCs5IGkoLZ0M4KLUL3y5zc76Ya8hSszAXMsTJsDmNXDxEob8g-Usv-G49aYod3pMZpjXNybwbDRfdPc"
                            />
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <footer className="mt-12 text-center">
                    <p className="text-[11px] font-bold text-[#7d4d62]/60 uppercase tracking-widest leading-relaxed max-w-70 mx-auto">
                        Just for fun! Don&apos;t take this calculator seriously. Your love is worth more than any love calculator.
                    </p>
                </footer>
            </main>
            {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#ff7294]/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#c39fff]/10 rounded-full blur-[100px]"></div>
            </div>
        </div>
    );
}