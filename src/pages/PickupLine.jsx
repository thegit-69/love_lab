import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. The Customized Chennai/Telugu Student Database
const pickupLines = [
  // --- Tenglish & College Vibes ---
  "Are you an arrear? Because I can't seem to clear you from my mind.",
  "Are you SRM University? Because you're out of my league, but I'm still trying.",
  "Btech lo backlogs unnai kani, naa gundelo matram neekosam front seat undi. 🚗",
  "Are you a Marina beach sundal? Because you add flavor to my boring life.",
  "Meeru ECR lo long drive lanti varu... smooth, beautiful, and fully romantic. 🌊",
  "Did it hurt? When you fell from the top of the college rank list straight into my heart?",
  "Naa attendance 75% ledhu, kani naa focus matram 100% nee meedhe undi. 👀",
  "Are you a masala dosa from Ratna Cafe? Because you're perfectly hot and crispy. ☕",
  "I might fail my mid-sems, but I'll never fail to make you smile.",
  "Are you from Andhra? Because you just added a lot of spice to my Chennai life. 🌶️",

  // --- Developer / Tech Bro Vibes ---
  "Are you a semicolon? Because my code breaks without you.",
  "Naa code ki error ochindi, because it's missing 'U'. 💻",
  "Are you an API? Because I want to POST all my love to you.",
  "Mawa, na heart server crash aindi, nee navvu chusaka. 🛑",
  "Is your name Wi-Fi? Because I'm feeling a really strong connection.",

  // --- Cheesy / Classic ---
  "Are you a magician? Because whenever I look at you, everyone else disappears! 🎩",
  "Kallu unnayani chudadame kani, ninnu chusake choopu aagipoyindi. 🥺",
  "Do you have a map? I just keep getting lost in your eyes.",
  "Nee peru Google aa? Because you have everything I'm searching for. 🔍",
  "I must be a snowflake, because I've fallen for you.",
  "Nuvvu oopiri peelusthunte, naa gunde kottukuntundi. ❤️",

  // --- Add remaining 79 lines below to reach 100... ---
  "Are you a library book? Because I want to check you out.",
  "Oka look tho na full syllabus cover chesav ga! 📚",
  "Is it hot in Chennai today, or is it just you?",
  "Nee smile chuste, naa OMR traffic stress antha mayam. 🚦",
  "Are you Sathyam Cinemas popcorn? Because you are elite and irresistible. 🍿",
  "Did you invent the airplane? Because you seem completely Wright for me.",
  "Nee DP chusi, na battery 1% unna kuda chat chesthune unna. 🔋",
  "Are you a camera? Because every time I look at you, I smile.",
  "Nuvvu naa life lo 'Add to Cart' kaadhu, direct 'Place Order' eh. 🛒",
  "Are you a keyboard? Because you're just my type.",
  "Naa Spotify wrapped lo top artist nuvve. 🎵",
  "Do you like Star Wars? Because Yoda only one for me.",
  "Nuvvu osthe na life lo fast-track, lekapothe full back-track. 🚂",
  "Are you a bank loan? Because you have my interest.",
  "Mawa, nee kosam entha pedda queue lo aina nilchunta, even at SS Biryani! 🍗",
  "I’m not a photographer, but I can picture us together.",
  "Naa WhatsApp last seen hide chesina, naa focus antha nee last seen meedhe. 📱",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
  "Nee voice vinnaka, FM radio kuda boring ga undi. 📻",
  "Are you French? Because Eiffel for you.",
  "Nuvvu naaku Paracetamol lanti daanivi... na problems anni taggipothayi. 💊",
  "Can I follow you home? Cause my parents always told me to follow my dreams.",
  "Naa Zomato delivery late aina parledu, kani nee reply late aithe thattukolenu. 🍔",
  "Are you a parking ticket? Because you’ve got FINE written all over you.",
  "Chennai weather kanna nuvve ekkuva hot ga unnav! ☀️",
  "Did you swallow magnets? Cause you’re attractive.",
  "Nee eyes lo filter ledhu, kani na life ki brightness techaru. ✨",
  "I'd say God Bless you, but it looks like he already did.",
  "Nee navvu chuste, naku sem exams kuda easy ga anipisthayi. 📝",
  "Are you an interior decorator? Because when you walked in, the room was beautiful.",
  "Naa Instagram feed lo nee post osthe, na thumb automatic ga double tap chesthundi. ❤️",
  "Are you a time traveler? Because I see you in my future.",
  "Nuvvu nannu reject cheste, na heart lo 404 Error osthundi. 💔",
  "Do you know CPR? Because you take my breath away.",
  "Naa hostel lo WiFi kanna, nee signal kosam ekkuva wait chesthunna. 📶",
  "If you were a vegetable, you’d be a cute-cumber.",
  "Nee preme naku free Prime subscription lanti idhi. 🎬",
  "Are you made of copper and tellurium? Because you're Cu-Te.",
  "Nuvvu oppukunte, na bike back seat ki permanent owner nuvve. 🏍️",
  "Do you have a name, or can I call you mine?",
  "Naa life ane cinema ki, nuvve heroine. 🎥",
  "Are you a dictionary? Cause you add meaning to my life.",
  "Nee maatalu vintu unte, na earphones charging aipoyina parledu. 🎧",
  "If I were a cat, I'd spend all 9 lives with you.",
  "Naa CGPA thakkuva unna, na gundelo nee place matram topper eh. 🥇",
  "Are you a campfire? Because you're hot and I want s'more.",
  "Nuvvu pakkana unte, Chennai local train kuda AC compartment la anipisthundi. 🚆",
  "Do you believe in love at first sight, or should I walk by again?",
  "Nee peru cheppagane, na face lo auto-smile osthundi. 😊",
  "I seem to have lost my phone number. Can I have yours?",
  "Naa wallet lo cash lekapoyina, na heart lo neekosam full space undi. 💸",
  "Are you a piece of art? Because I'd like to nail you to my wall. (Too far? Sorry!)",
  "Nuvvu naa life loki vachaka, na bad days kuda good days aipoyayi. 🌅",
  "Is your dad a boxer? Because you’re a knockout!",
  "Nee kannulu chusi, na route map marchipoyanu. 🗺️",
  "I must be hunting treasure, because I'm digging your chest.",
  "Nuvvu nannu chuste, na brain lo RAM saripoka hang aipothundi. 🧠",
  "Are you a snowstorm? Because you make my heart race.",
  "Nee kosam Nungambakkam nunchi Navalur varaku aina naduchukuntu ostha. 🚶‍♂️",
  "Do you like raisins? How do you feel about a date?",
  "Nuvvu oppukunte, na Netflix password nee istham vachinattu use chesko. 📺",
  "Are you an angle? Because you're so acute.",
  "Nee navvu chuste, naku diet cheyyali anipinchatledu, you are too sweet! 🍫",
  "Are you a campfire? Because you're super hot.",
  "Naa exam paper lo answers lekapoyina, naa mind lo matram nuvve unnav. 📄",
  "Did you fall out of heaven? Because so did Satan.",
  "Nuvvu pakkana unte, filter coffee kuda amrutham la anipisthundi. ☕",
  "Are you a vampire? Because you looked a little thirsty when you looked at me.",
  "Nee prema kosam, na PUBG rank kuda sacrifice chestha. 🎮",
  "Are you a campfire? Because you bring the heat.",
  "Nuvvu naa pakkana unte, naku Google Maps tho pani ledhu. 📍",
  "Are you a campfire? Because you're sparking my interest.",
  "Nee navvu naku daily dose of motivation. 💪",
  "Are you a campfire? Because I want to sit around you and tell stories.",
  "Nuvvu nannu reject chesthe, na life lo inka undo options levu. 🚫",
  "Are you a campfire? Because you're glowing.",
  "Nee chupu naalo electricity generate chesthundi. ⚡",
  "Are you a campfire? Because you're warming my heart.",
  "Nuvvu oppukunte, na life mottam neeku sontham. 💖"
];

const getRandomLine = () => pickupLines[Math.floor(Math.random() * pickupLines.length)];

export default function PickupLine() {
  const MotionDiv = motion.div;
  const MotionButton = motion.button;
  const MotionSpan = motion.span;
  const [line, setLine] = useState(() => getRandomLine());
  const [isRolling, setIsRolling] = useState(false);
  const rollTimeoutRef = useRef(null);
  const filledIcon = { fontVariationSettings: '"FILL" 1' };

  useEffect(() => {
    return () => {
      if (rollTimeoutRef.current) {
        window.clearTimeout(rollTimeoutRef.current);
      }
    };
  }, []);

  const generateLine = useCallback(() => {
    if (isRolling) {
      return;
    }

    if (rollTimeoutRef.current) {
      window.clearTimeout(rollTimeoutRef.current);
    }

    setIsRolling(true);

    rollTimeoutRef.current = window.setTimeout(() => {
      setLine(getRandomLine());
      setIsRolling(false);
    }, 1050);
  }, [isRolling]);

  return (
    <div className="bg-[#fff4f6] min-h-screen text-[#4a2135] font-['Plus_Jakarta_Sans'] pb-28 relative z-10 overflow-hidden flex flex-col selection:bg-[#ff7294] selection:text-[#4d001c]">
      {/* Main Content */}
      <main className="grow flex items-center justify-center w-full max-w-6xl mx-auto px-6 pt-24 pb-32 relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <section className="flex flex-col items-center justify-center text-center">
            <div className="mb-7">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#4a2135] mb-2">Pick-A-Line</h1>
              <p className="text-[#7d4d62] text-sm font-medium tracking-wide uppercase opacity-70">Feeling lucky in love?</p>
            </div>

            <div className="mb-8 relative cursor-pointer" onClick={generateLine}>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#4a2135]/10 blur-xl rounded-full" />

              <MotionDiv
                animate={
                  isRolling
                    ? {
                      rotate: [0, 190, 370, 560],
                      scale: [1, 1.05, 0.98, 1],
                      y: [0, -8, 0],
                    }
                    : {
                      rotate: 0,
                      scale: 1,
                      y: 0,
                    }
                }
                transition={
                  isRolling
                    ? { duration: 1.05, ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.4, ease: 'easeOut' }
                }
                className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-[2.5rem] border border-white/50 flex items-center justify-center relative shadow-[0_12px_32px_rgba(183,0,77,0.15)] bg-linear-to-br from-[#ffffff] to-[#fcebed]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="grid grid-cols-3 grid-rows-3 gap-3 w-2/3 h-2/3">
                  <div className="bg-[#a00043] rounded-full shadow-inner" />
                  <div />
                  <div className="bg-[#a00043] rounded-full shadow-inner" />
                  <div />
                  <div className="bg-[#a00043] rounded-full shadow-inner flex items-center justify-center">
                    {isRolling && <span className="material-symbols-outlined text-white text-xs animate-spin">refresh</span>}
                  </div>
                  <div />
                  <div className="bg-[#a00043] rounded-full shadow-inner" />
                  <div />
                  <div className="bg-[#a00043] rounded-full shadow-inner" />
                </div>
              </MotionDiv>
            </div>

          </section>

          <section className="w-full flex flex-col items-center md:items-start">
            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateLine}
              disabled={isRolling}
              className="w-full sm:max-w-sm md:max-w-none bg-linear-to-tr from-[#b7004d] to-[#ff7294] text-white py-5 rounded-full font-extrabold text-lg tracking-widest shadow-lg shadow-[#ff7294]/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mb-6"
            >
              <MotionSpan
                animate={{ rotate: isRolling ? 360 : 0 }}
                transition={{ duration: isRolling ? 0.8 : 0.3, ease: 'easeInOut' }}
                className="material-symbols-outlined text-2xl"
                style={filledIcon}
              >
                casino
              </MotionSpan>
              {isRolling ? 'ROLLING...' : 'ROLL FOR ROMANCE'}
            </MotionButton>

            <AnimatePresence mode="wait">
              <MotionDiv
                key={line}
                initial={{ opacity: 0, y: 24, scale: 0.97, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, scale: 0.98, filter: 'blur(3px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-white/92 backdrop-blur-2xl rounded-4xl p-6 sm:p-8 mb-8 text-center min-h-40 flex flex-col justify-center border-2 border-[#ff7294]/25 shadow-[0_14px_34px_rgba(74,33,53,0.12)]"
              >
                <span className="material-symbols-outlined text-[#b7004d] mb-4 block text-4xl mx-auto" style={filledIcon}>chat_bubble</span>
                <p className="text-xl md:text-2xl font-bold text-[#4a2135] leading-relaxed">
                  &quot;{line}&quot;
                </p>
              </MotionDiv>
            </AnimatePresence>

            <div className="text-center md:text-left">
              <div className="bg-[#ffecf1]/95 rounded-full px-6 py-3 inline-block border border-white/70 shadow-[0_8px_20px_rgba(74,33,53,0.10)]">
                <p className="text-xs text-[#7d4d62] font-medium leading-tight">
                  Just for fun! Don&apos;t take these lines too seriously-your charm is worth more than any algorithm.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}