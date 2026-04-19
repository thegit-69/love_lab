import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Flames.css';

const FLAMES_LETTERS = ['F', 'L', 'A', 'M', 'E', 'S'];

const FLAMES_RESULT_MAP = {
    F: {
        word: 'Friends',
        message: "Just friends ra. Don't overthink it, go have tea at cassendra. ☕",
    },
    L: {
        word: 'Lovers',
        message: 'Vera level romance! Pure Tollywood love story loading. 🎬',
    },
    A: {
        word: 'Affection',
        message: 'Lots of care, but someone is hiding it. Open up, boss! 👀',
    },
    M: {
        word: 'Marriage',
        message: 'You are lucky, take care ur loved ones,BTW when is the marriage. 😉💝💗💍',
    },
    E: {
        word: 'Enmity',
        message: 'Abba, full fight. Better stay two streets away from each other. 🥊',
    },
    S: {
        word: 'Siblings',
        message: 'Sorry friend🫣😵,Siblings sentiment activated. Raksha Bandhan advance wishes! 🎁',
    },
};

function normalizeName(value) {
    return value.toLowerCase().replace(/\s+/g, '');
}

function createStrikeData(nameOne, nameTwo) {
    const first = normalizeName(nameOne).split('');
    const second = normalizeName(nameTwo).split('');

    const secondUsed = Array(second.length).fill(false);
    const firstChars = first.map((char) => ({ char, crossed: false, order: -1 }));
    const secondChars = second.map((char) => ({ char, crossed: false, order: -1 }));

    let matchOrder = 0;

    for (let i = 0; i < firstChars.length; i += 1) {
        const matchIndex = secondChars.findIndex(
            (item, idx) => item.char === firstChars[i].char && !secondUsed[idx],
        );

        if (matchIndex !== -1) {
            firstChars[i].crossed = true;
            firstChars[i].order = matchOrder;
            secondChars[matchIndex].crossed = true;
            secondChars[matchIndex].order = matchOrder;
            secondUsed[matchIndex] = true;
            matchOrder += 1;
        }
    }

    const uncrossedCount =
        firstChars.filter((item) => !item.crossed).length +
        secondChars.filter((item) => !item.crossed).length;

    return {
        firstChars,
        secondChars,
        uncrossedCount,
        totalMatches: matchOrder,
    };
}

function getFinalFlamesLetter(uncrossedCount) {
    const letters = [...FLAMES_LETTERS];
    const step = uncrossedCount === 0 ? 1 : uncrossedCount;
    let index = 0;

    while (letters.length > 1) {
        index = (index + step - 1) % letters.length;
        letters.splice(index, 1);
    }

    return letters[0];
}

export default function Flames() {
    const MotionButton = motion.button;
    const MotionSpan = motion.span;
    const MotionDiv = motion.div;
    const [nameOne, setNameOne] = useState('');
    const [nameTwo, setNameTwo] = useState('');
    const [gameState, setGameState] = useState('input');
    const [resultInfo, setResultInfo] = useState(null);
    const [strikeData, setStrikeData] = useState(null);

    const timerRef = useRef(null);
    const filledIcon = { fontVariationSettings: '"FILL" 1' };

    const notebookPaperStyle = {
        backgroundColor: '#fffdf5',
        backgroundImage:
            'linear-gradient(rgba(173, 216, 230, 0.4) 1px, transparent 1px), linear-gradient(90deg, transparent 40px, #ffb3b3 1px, #ffb3b3 2px, transparent 41px)',
        backgroundSize: '100% 32px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        minHeight: '600px',
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                window.clearTimeout(timerRef.current);
            }
        };
    }, []);

    const calculateFlames = () => {
        if (gameState === 'animating') {
            return;
        }

        const trimmedOne = nameOne.trim();
        const trimmedTwo = nameTwo.trim();

        if (!trimmedOne || !trimmedTwo) {
            return;
        }

        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
        }

        const nextStrikeData = createStrikeData(trimmedOne, trimmedTwo);
        const finalLetter = getFinalFlamesLetter(nextStrikeData.uncrossedCount);
        const mappedResult = FLAMES_RESULT_MAP[finalLetter];

        setStrikeData(nextStrikeData);
        setResultInfo({ letter: finalLetter, word: mappedResult.word, message: mappedResult.message });
        setGameState('animating');

        const animationDuration = 2250
        timerRef.current = window.setTimeout(() => {
            setGameState('result');
        }, animationDuration);
    };

    const resetGame = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
        }

        setNameOne('');
        setNameTwo('');
        setResultInfo(null);
        setStrikeData(null);
        setGameState('input');
    };

    const lineContainerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const lineVariants = {
        initial: {
            scaleX: 0,
            opacity: 0.9,
        },
        animate: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="min-h-screen pb-32 bg-[#fff4f6] text-[#4a2135] font-['Plus_Jakarta_Sans'] selection:bg-[#ff7294] selection:text-[#4d001c]">
            {/* TopAppBar */}
            <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[#fff4f6]/80 px-6 shadow-[0_12px_32px_rgba(74,33,53,0.06)] backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-xl text-[#b7004d]">favorite</span>
                    <h1 className="text-2xl font-extrabold tracking-tighter text-[#b7004d]">
                        <span className="material-symbols-outlined mr-1 align-middle text-sm" style={filledIcon}>favorite</span>
                        LoveLab
                    </h1>
                </div>

                <Link
                    to="/"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe0eb] transition-transform duration-300 hover:scale-110"
                    aria-label="Back home"
                >
                    <span className="material-symbols-outlined text-[#b7004d]" style={filledIcon}>home</span>
                </Link>
            </header>

            <main className="mx-auto w-full max-w-7xl px-6 pt-24">
                {/* Notebook Area */}
                <div className="relative overflow-hidden rounded-2xl border border-black/5 p-6 pt-10" style={notebookPaperStyle}>
                    {/* Notebook Holes decoration */}
                    <div className="absolute bottom-0 left-3 top-0 flex flex-col justify-around py-4">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="h-4 w-4 rounded-full bg-[#fff4f6] shadow-inner" />
                        ))}
                    </div>

                    <div className="pl-10 md:pl-12">
                        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center">
                            <h2 className="font-notebook mb-12 -rotate-1 text-center text-4xl text-blue-800">
                                The Flames Game...
                            </h2>

                            {gameState === 'input' && (
                                <>
                                    <div className="mb-16 w-full space-y-8">
                                        <div>
                                            <label className="mb-0 block font-['Caveat'] text-2xl leading-none text-slate-600">Your Name:</label>
                                            <input
                                                className="font-notebook w-full border-none bg-transparent px-0 py-1 text-3xl text-blue-700 placeholder:text-blue-700/30 focus:ring-0"
                                                placeholder="Juliet"
                                                type="text"
                                                value={nameOne}
                                                onChange={(event) => setNameOne(event.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-0 block font-['Caveat'] text-2xl leading-none text-slate-600">Crush Name:</label>
                                            <input
                                                className="font-notebook w-full border-none bg-transparent px-0 py-1 text-3xl text-blue-700 placeholder:text-blue-700/30 focus:ring-0"
                                                placeholder="Romeo"
                                                type="text"
                                                value={nameTwo}
                                                onChange={(event) => setNameTwo(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-12 w-full">
                                        <div className="mb-6 flex items-center justify-between pr-4">
                                            <div className="font-notebook flex gap-4 text-5xl text-blue-800 md:text-6xl">
                                                {FLAMES_LETTERS.map((letter) => (
                                                    <span key={letter} className="opacity-75">{letter}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-1 font-['Caveat'] text-lg text-slate-500">
                                            <div>F - Friends</div>
                                            <div>L - Lovers</div>
                                            <div>A - Affection</div>
                                            <div>M - Marriage</div>
                                            <div>E - Enmity</div>
                                            <div>S - Sibling</div>
                                        </div>

                                        <div className="relative mt-8 -rotate-2 text-center">
                                            <p className="font-['Caveat'] text-3xl font-bold text-[#b7004d]">
                                                Ready to test fate? <span className="text-4xl">❤️</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-16 w-full pr-4">
                                        <MotionButton
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="button"
                                            className="w-full rotate-1 rounded-sm border-b-4 border-r-4 border-black/20 bg-[#b7004d] py-3 font-['Caveat'] text-2xl text-white shadow-md transition-all hover:shadow-lg"
                                            onClick={calculateFlames}
                                        >
                                            Calculate FLAMES
                                        </MotionButton>
                                    </div>
                                </>
                            )}

                            {gameState === 'animating' && strikeData && (
                                <div className="mt-4 w-full">
                                    <div className="mb-8 flex items-center justify-center gap-3 font-['Caveat'] text-2xl text-[#b7004d]">
                                        <MotionSpan
                                            animate={{ x: [0, 9, -6, 0], rotate: [-10, 6, -7, -10] }}
                                            transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
                                            className="text-3xl"
                                        >
                                            ✏️
                                        </MotionSpan>
                                        Crossing out matching letters...
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <p className="font-['Caveat'] text-2xl text-slate-600">{nameOne}</p>
                                            <MotionDiv className="font-notebook mt-2 flex flex-wrap gap-1 text-4xl text-blue-700" variants={lineContainerVariants} initial="initial" animate="animate">
                                                {strikeData.firstChars.map((item, index) => (
                                                    <MotionSpan key={`${item.char}-${index}`} className="relative inline-block min-w-[0.9ch] px-0.5">
                                                        <span className={item.crossed ? 'text-blue-700/70' : ''}>{item.char.toUpperCase()}</span>
                                                        {item.crossed && (
                                                            <MotionSpan
                                                                className="absolute left-0 top-1/2 h-0.75 w-full -translate-y-1/2 bg-[#b7004d]"
                                                                variants={lineVariants}
                                                                style={{ originX: 0 }}
                                                                transition={{ duration: 0.14, delay: item.order * 0.05 }}
                                                            />
                                                        )}
                                                    </MotionSpan>
                                                ))}
                                            </MotionDiv>
                                        </div>

                                        <div>
                                            <p className="font-['Caveat'] text-2xl text-slate-600">{nameTwo}</p>
                                            <MotionDiv className="font-notebook mt-2 flex flex-wrap gap-1 text-4xl text-blue-700" variants={lineContainerVariants} initial="initial" animate="animate">
                                                {strikeData.secondChars.map((item, index) => (
                                                    <MotionSpan key={`${item.char}-${index}`} className="relative inline-block min-w-[0.9ch] px-0.5">
                                                        <span className={item.crossed ? 'text-blue-700/70' : ''}>{item.char.toUpperCase()}</span>
                                                        {item.crossed && (
                                                            <MotionSpan
                                                                className="absolute left-0 top-1/2 h-0.75 w-full -translate-y-1/2 bg-[#b7004d]"
                                                                variants={lineVariants}
                                                                style={{ originX: 0 }}
                                                                transition={{ duration: 0.14, delay: item.order * 0.05 }}
                                                            />
                                                        )}
                                                    </MotionSpan>
                                                ))}
                                            </MotionDiv>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {gameState === 'result' && resultInfo && (
                                <div className="mt-6 w-full text-center">
                                    <div className="mb-7 flex justify-center gap-4 pr-0 font-notebook text-5xl text-blue-800 md:text-6xl">
                                        {FLAMES_LETTERS.map((letter) => {
                                            const isWinner = resultInfo.letter === letter;

                                            return (
                                                <span
                                                    key={letter}
                                                    className={isWinner ? 'relative text-[#b7004d]' : 'line-through decoration-[#b7004d] decoration-4 opacity-35'}
                                                >
                                                    {letter}
                                                    {isWinner && (
                                                        <span className="pointer-events-none absolute -inset-2 scale-125 -rotate-3 rounded-full border-2 border-[#b7004d]/70" />
                                                    )}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <p className="font-notebook text-6xl text-[#b7004d] md:text-7xl">
                                        {resultInfo.word.toUpperCase()}
                                    </p>
                                    <p className="mx-auto mt-4 max-w-lg text-base font-semibold leading-relaxed text-[#6e391a] md:text-lg">
                                        {resultInfo.message}
                                    </p>

                                    <MotionButton
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="button"
                                        className="mt-10 rounded-full bg-linear-to-br from-[#b7004d] to-[#ff7294] px-8 py-3 font-['Caveat'] text-2xl text-white shadow-lg shadow-[#b7004d]/25"
                                        onClick={resetGame}
                                    >
                                        Try Another Crush
                                    </MotionButton>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative elements outside the main notebook */}
                <div className="relative mt-8 flex h-32 items-center justify-center overflow-hidden opacity-30">
                    <div className="absolute left-4 top-0 rotate-12 font-['Caveat'] text-xl font-bold text-[#b7004d]">XOXO</div>
                    <span className="material-symbols-outlined animate-pulse text-2xl">sparkles</span>
                    <div className="absolute right-8 top-4 -rotate-12 font-['Caveat'] text-xl font-bold text-[#b7004d]">CUTE</div>
                    <span className="material-symbols-outlined mx-8 text-3xl">celebration</span>
                    <div className="absolute bottom-4 left-10 rotate-6 font-['Caveat'] text-lg font-bold text-[#b7004d]">BFF</div>
                    <span className="material-symbols-outlined -rotate-12 text-2xl">favorite</span>
                    <span className="material-symbols-outlined absolute bottom-2 right-20 rotate-45 text-xl">auto_awesome</span>
                </div>
            </main>

            {/* BottomNavBar */}
            <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-[3rem] bg-[#fff4f6]/80 px-4 pb-8 pt-4 shadow-[0_-12px_40px_rgba(74,33,53,0.08)] backdrop-blur-2xl">
                <Link to="/" className="flex cursor-pointer flex-col items-center justify-center px-5 py-2 text-[#4a2135]/50 transition-colors duration-200 hover:text-[#b7004d] active:scale-90">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Home</span>
                </Link>

                <Link to="/love" className="flex cursor-pointer flex-col items-center justify-center px-5 py-2 text-[#4a2135]/50 transition-colors duration-200 hover:text-[#b7004d] active:scale-90">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Calculator</span>
                </Link>

                <Link to="/flames" className="flex cursor-pointer flex-col items-center justify-center scale-110 rounded-full bg-linear-to-br from-[#b7004d] to-[#ff7294] px-5 py-2 text-white shadow-lg shadow-[#ff3377]/30 transition-transform duration-200 active:scale-90">
                    <span className="material-symbols-outlined" style={filledIcon}>local_fire_department</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">FLAMES</span>
                </Link>

                <Link to="/date" className="flex cursor-pointer flex-col items-center justify-center px-5 py-2 text-[#4a2135]/50 transition-colors duration-200 hover:text-[#b7004d] active:scale-90">
                    <span className="material-symbols-outlined">celebration</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Dates</span>
                </Link>
            </nav>
        </div>
    );
}