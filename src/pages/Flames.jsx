import { Link } from 'react-router-dom';
import './Flames.css';

export default function Flames() {
    const filledIcon = { fontVariationSettings: '"FILL" 1' };

    const notebookPaperStyle = {
        backgroundColor: '#fffdf5',
        backgroundImage:
            'linear-gradient(rgba(173, 216, 230, 0.4) 1px, transparent 1px), linear-gradient(90deg, transparent 40px, #ffb3b3 1px, #ffb3b3 2px, transparent 41px)',
        backgroundSize: '100% 32px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        minHeight: '600px',
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

                            {/* Inputs */}
                            <div className="mb-16 w-full space-y-8">
                                <div>
                                    <label className="mb-0 block font-['Caveat'] text-2xl leading-none text-slate-600">Your Name:</label>
                                    <input
                                        className="font-notebook w-full border-none bg-transparent px-0 py-1 text-3xl text-blue-700 placeholder:text-blue-700/30 focus:ring-0"
                                        placeholder="Juliet"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="mb-0 block font-['Caveat'] text-2xl leading-none text-slate-600">Crush Name:</label>
                                    <input
                                        className="font-notebook w-full border-none bg-transparent px-0 py-1 text-3xl text-blue-700 placeholder:text-blue-700/30 focus:ring-0"
                                        placeholder="Romeo"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* FLAMES Result Area */}
                            <div className="mt-12 w-full">
                                <div className="mb-6 flex items-center justify-between pr-4">
                                    <div className="font-notebook flex gap-4 text-5xl text-blue-800 md:text-6xl">
                                        <span className="line-through decoration-[#b7004d] decoration-4 opacity-40">F</span>
                                        <span className="relative">
                                            L
                                            <div className="absolute -inset-2 scale-150 rotate-3 rounded-full border-2 border-[#b7004d] opacity-70" />
                                        </span>
                                        <span className="line-through decoration-[#b7004d] decoration-4 opacity-40">A</span>
                                        <span className="line-through decoration-[#b7004d] decoration-4 opacity-40">M</span>
                                        <span className="line-through decoration-[#b7004d] decoration-4 opacity-40">E</span>
                                        <span className="line-through decoration-[#b7004d] decoration-4 opacity-40">S</span>
                                    </div>
                                </div>

                                {/* Legend scribbled */}
                                <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-1 font-['Caveat'] text-lg text-slate-500">
                                    <div className="line-through decoration-[#b7004d]/30">F - Friends</div>
                                    <div className="font-bold text-[#b7004d] underline decoration-wavy">L - Lovers</div>
                                    <div className="line-through decoration-[#b7004d]/30">A - Affection</div>
                                    <div className="line-through decoration-[#b7004d]/30">M - Marriage</div>
                                    <div className="line-through decoration-[#b7004d]/30">E - Enmity</div>
                                    <div className="line-through decoration-[#b7004d]/30">S - Sibling</div>
                                </div>

                                <p className="font-notebook mb-12 text-center text-4xl text-[#b7004d] md:text-5xl">
                                    Lovers
                                </p>

                                {/* Cute Note */}
                                <div className="relative mt-8 -rotate-2 text-center">
                                    <p className="font-['Caveat'] text-3xl font-bold text-[#b7004d]">
                                        It's fate! <span className="text-4xl">❤️</span>
                                    </p>
                                    <div className="mt-2 flex justify-center opacity-40">
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 w-full pr-4">
                                <button
                                    type="button"
                                    className="w-full rotate-1 rounded-sm border-b-4 border-r-4 border-black/20 bg-[#b7004d] py-3 font-['Caveat'] text-2xl text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                                >
                                    Strike Out!
                                </button>
                            </div>
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