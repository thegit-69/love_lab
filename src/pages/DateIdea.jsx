import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const dateIdeas = [
    {
        title: 'Marina Sundal & Deep Talks',
        description: 'Walk from the Lighthouse side, grab some milagai bajji and sundal. Macha, best budget date ever. Baga set avvuddi!',
        location: 'Marina Beach',
        price: 'Rs.150',
        image: 'https://images.unsplash.com/photo-1596884693450-482f3a67d025?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Arcade Battle & Window Shopping',
        description: 'Challenge them to Air Hockey at Funcity. Loser buys the momos at the food court!',
        location: 'VR Mall, Anna Nagar',
        price: 'Rs.800',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Tower Park Stroll & Desserts',
        description: 'A peaceful evening walk followed by cafe hopping in Shanti Colony. Super aesthetic vibes.',
        location: 'Anna Nagar Tower Park',
        price: 'Rs.500',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Morning Show & Massive Popcorn',
        description: 'Catch a 100-rupee morning show. Invest the rest of your budget in that giant caramel popcorn.',
        location: 'AGS Cinemas / EVP Cinemas',
        price: 'Rs.600',
        image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Thiruvanmiyur Midnight Maggi',
        description: 'Long drive, sea breeze, and sharing a hot plate of Maggi. Pure Kollywood/Tollywood romance mawa.',
        location: 'Thiruvanmiyur Beach',
        price: 'Rs.200',
        image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Adrenaline Rush at VGP',
        description: 'Scream your lungs out on the rollercoasters. Perfect excuse to hold their hand! 😉',
        location: 'VGP Universal Kingdom',
        price: 'Rs.1500',
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'ECR Sunrise Chai Ride',
        description: 'Start early, ride on ECR, stop for hot chai and watch sunrise. Full cinematic opening scene energy.',
        location: 'ECR Coast Road',
        price: 'Rs.300',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Bookstore + Filter Coffee Date',
        description: 'Pick one book for each other and end with strong filter kaapi. Soft romance, zero pressure.',
        location: 'Nungambakkam',
        price: 'Rs.700',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Phoeniox Mall Food Crawl',
        description: 'One starter here, one dessert there, and one surprise dish each. Date + game combo sorted.',
        location: 'Phoenix Marketcity',
        price: 'Rs.1200',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Besant Nagar Beach Walk',
        description: 'Walk barefoot, share corn, and listen to random life stories. Low budget, high memories.',
        location: 'Elliots Beach',
        price: 'Rs.250',
        image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Museum + Ice Cream Combo',
        description: 'Explore art and history, then cool off with loaded sundaes. Intellectual and sweet in one shot.',
        location: 'Egmore Museum Area',
        price: 'Rs.550',
        image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Broken Bridge Sunset Spot',
        description: 'Golden hour photos, chill playlist, and deep talks. Keep it simple and memorable.',
        location: 'Broken Bridge, Adyar',
        price: 'Rs.180',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Street Food Relay Challenge',
        description: 'Each person picks one unknown stall item for the other. Fun risk, fun reactions.',
        location: 'Sowcarpet',
        price: 'Rs.400',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Paint Pottery Together',
        description: 'Choose two mugs and paint them for each other. Cute keepsake unlocked.',
        location: 'RA Puram Studio Cafe',
        price: 'Rs.1100',
        image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Mini Golf + Cold Coffee',
        description: 'Friendly competition, playful teasing, and victory selfies. Perfect awkward-silence killer.',
        location: 'OMR Entertainment Zone',
        price: 'Rs.900',
        image: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Bike Ride to Kovalam',
        description: 'Sea wind, quick stop for fish fry, then sit by the water. Straight out of a song montage.',
        location: 'Kovalam via ECR',
        price: 'Rs.650',
        image: 'https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Cat Cafe Chill Session',
        description: 'Pet cats, sip hot chocolate, and gossip about life. Cozy and wholesome vibes.',
        location: 'Adyar Cafe District',
        price: 'Rs.1000',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Live Music + Pasta Night',
        description: 'Reserve a corner table and enjoy unplugged tracks. Best for soft-launching your feelings.',
        location: 'Alwarpet Bistro',
        price: 'Rs.1800',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Board Game Cafe Face-Off',
        description: 'Pick strategy games, team up or trash-talk, and order loaded fries between rounds.',
        location: 'Anna Nagar Board Game Cafe',
        price: 'Rs.850',
        image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Rooftop Dinner Under Lights',
        description: 'City skyline, breezy weather, and fairy lights. Maximum romance, minimum effort.',
        location: 'T Nagar Rooftop',
        price: 'Rs.2200',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Temple Walk + Jigarthanda',
        description: 'Explore heritage streets, then cool down with a sweet local drink and banter.',
        location: 'Mylapore',
        price: 'Rs.350',
        image: 'https://images.unsplash.com/photo-1545134969-8debd725b007?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Cloud Kitchen Taste Test',
        description: 'Order from three random places and rate each dish together. Date with surprise factor.',
        location: 'At Home Setup',
        price: 'Rs.1200',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Photo Walk in George Town',
        description: 'Colorful streets, old architecture, and candid portraits. Aesthetic content guaranteed.',
        location: 'George Town',
        price: 'Rs.300',
        image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Kite Flying and Chaat',
        description: 'Simple fun, lots of laughs, and spicy chaat after. Budget-friendly and cute.',
        location: 'Elliots Beach Promenade',
        price: 'Rs.220',
        image: 'https://images.unsplash.com/photo-1470233953158-cb95f6d08014?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Open Mic Night Date',
        description: 'Attend standup or acoustic open mic and judge performances together. Instant inside jokes.',
        location: 'Nungambakkam Art Cafe',
        price: 'Rs.950',
        image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
];

const getRandomIdea = (excludeTitle) => {
    const pool = excludeTitle ? dateIdeas.filter((idea) => idea.title !== excludeTitle) : dateIdeas;
    const source = pool.length > 0 ? pool : dateIdeas;
    return source[Math.floor(Math.random() * source.length)];
};

export default function DateIdea() {
    const MotionDiv = motion.div;
    const MotionButton = motion.button;
    const [currentIdea, setCurrentIdea] = useState(() => getRandomIdea());
    const [isGenerating, setIsGenerating] = useState(false);
    const timerRef = useRef(null);

    const filledIcon = { fontVariationSettings: '"FILL" 1' };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                window.clearTimeout(timerRef.current);
            }
        };
    }, []);

    const generateNewPlan = () => {
        if (isGenerating) {
            return;
        }

        setIsGenerating(true);
        timerRef.current = window.setTimeout(() => {
            setCurrentIdea((prev) => getRandomIdea(prev.title));
            setIsGenerating(false);
        }, 420);
    };

    return (
        <div className="bg-[#fff4f6] min-h-screen text-[#4a2135] font-['Plus_Jakarta_Sans'] pb-28 relative overflow-hidden selection:bg-[#ff7294] selection:text-[#4d001c]">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#fff4f6]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(74,33,53,0.04)]">
                <div className="flex items-center gap-2 text-2xl font-black tracking-tighter text-[#b7004d]">
                    <span className="material-symbols-outlined text-[#b7004d]" style={filledIcon}>favorite</span>
                    <span className="font-bold tracking-tight">LoveLab</span>
                </div>
                <div className="flex gap-4">
                    <button
                        type="button"
                        className="material-symbols-outlined text-[#4a2135]/60 hover:scale-110 transition-transform duration-300 ease-out active:scale-90"
                    >
                        notifications
                    </button>
                    <button
                        type="button"
                        className="material-symbols-outlined text-[#4a2135]/60 hover:scale-110 transition-transform duration-300 ease-out active:scale-90"
                    >
                        settings
                    </button>
                </div>
            </header>

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-28 -right-20 w-96 h-96 bg-[#ff7294]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-24 -left-20 w-96 h-96 bg-[#c39fff]/15 rounded-full blur-[100px]" />
            </div>

            <main className="pt-24 pb-32 w-full max-w-4xl mx-auto px-6 space-y-8">
                <section className="text-center space-y-2">
                    <h1 className="text-[2.5rem] md:text-6xl font-extrabold leading-[1.1] tracking-[-0.04em] text-[#4a2135]">
                        Spark Something <span className="text-[#b7004d] italic">New</span>
                    </h1>
                    <p className="text-[#7d4d62] font-medium opacity-80 max-w-2xl mx-auto">
                        Tap the magic wand to reveal your next romantic adventure.
                    </p>
                </section>

                <section className="relative min-h-105 md:min-h-117.5 flex items-center justify-center">
                    <div className="absolute w-[85%] h-85 md:h-95 bg-[#c39fff]/20 rounded-4xl rotate-6 translate-y-4" />
                    <div className="absolute w-[90%] h-85 md:h-95 bg-[#ff7294]/15 rounded-4xl -rotate-3 translate-y-2" />

                    <AnimatePresence mode="wait">
                        <MotionDiv
                            key={currentIdea.title}
                            initial={{ opacity: 0, x: 80, scale: 0.94 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -50, scale: 0.96 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-3xl bg-white/70 backdrop-blur-2xl rounded-4xl shadow-[0_12px_32px_0px_rgba(74,33,53,0.06)] overflow-hidden flex flex-col"
                        >
                            <div className="h-56 md:h-64 relative overflow-hidden rounded-t-4xl">
                                <img
                                    className="w-full h-full object-cover"
                                    src={currentIdea.image}
                                    alt={currentIdea.title}
                                />
                                <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#b7004d] flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]" style={filledIcon}>star</span>
                                    TOP PICK
                                </div>
                            </div>

                            <div className="p-6 md:p-7 flex flex-col grow bg-white/85">
                                <div className="flex justify-between items-start mb-2 gap-3">
                                    <h2 className="text-2xl font-bold text-[#4a2135] tracking-tight">{currentIdea.title}</h2>
                                    <span className="text-2xl">🧺</span>
                                </div>
                                <p className="text-[#7d4d62] leading-relaxed mb-auto">{currentIdea.description}</p>
                                <div className="flex flex-wrap gap-3 mt-5">
                                    <span className="rounded-full bg-[#ffecf1] px-3 py-1 text-xs font-bold text-[#4a2135] flex items-center gap-1.5 uppercase tracking-wide">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        {currentIdea.location}
                                    </span>
                                    <span className="rounded-full bg-[#ffecf1] px-3 py-1 text-xs font-bold text-[#4a2135] flex items-center gap-1.5 uppercase tracking-wide">
                                        <span className="material-symbols-outlined text-sm">payments</span>
                                        {currentIdea.price}
                                    </span>
                                </div>
                            </div>
                        </MotionDiv>
                    </AnimatePresence>
                </section>

                <section>
                    <MotionButton
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={generateNewPlan}
                        disabled={isGenerating}
                        type="button"
                        className="w-full h-16 bg-linear-to-br from-[#b7004d] to-[#ff7294] text-white rounded-full font-bold text-lg shadow-lg shadow-[#b7004d]/20 flex items-center justify-center gap-3 active:scale-95 transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                        <span className="material-symbols-outlined" style={filledIcon}>event</span>
                        {isGenerating ? 'GENERATING...' : 'GENERATE NEW PLAN'}
                    </MotionButton>
                </section>

                <footer className="pt-6 pb-4 text-center">
                    <p className="text-[10px] font-bold text-[#7d4d62] uppercase tracking-widest opacity-40">
                        Generated just for fun • Results vary by heart size
                    </p>
                </footer>
            </main>

            <nav className="fixed bottom-0 left-0 w-full h-24 bg-[#fff4f6]/90 backdrop-blur-2xl flex justify-around items-center z-50 rounded-t-[3rem] shadow-[0_-16px_48px_rgba(74,33,53,0.1)] px-2">
                <Link to="/" className="flex flex-col items-center justify-center text-[#4a2135]/50 p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Home</span>
                </Link>
                <Link to="/love" className="flex flex-col items-center justify-center text-[#4a2135]/50 p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">calculate</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Calculator</span>
                </Link>
                <Link to="/flames" className="flex flex-col items-center justify-center text-[#4a2135]/50 p-2 hover:text-[#b7004d] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">favorite_border</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Flames</span>
                </Link>
                <Link to="/date" className="flex flex-col items-center justify-center bg-linear-to-br from-[#b7004d] to-[#ff7294] text-white rounded-full px-6 py-2 shadow-lg shadow-[#ff7294]/40 transition-all duration-300 active:scale-90">
                    <span className="material-symbols-outlined" style={filledIcon}>event</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Dates</span>
                </Link>
            </nav>
        </div>
    );
}