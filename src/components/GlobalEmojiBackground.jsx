const sideEmojis = [
    { id: 'l1', symbol: '💖', top: 8, left: 4, size: 32, rotation: -18, opacity: 0.16, duration: 6.2, delay: 0.2 },
    { id: 'l2', symbol: '🌸', top: 20, left: 10, size: 28, rotation: 12, opacity: 0.14, duration: 7.1, delay: 1.1 },
    { id: 'l3', symbol: '✨', top: 32, left: 6, size: 26, rotation: -8, opacity: 0.13, duration: 5.8, delay: 0.6 },
    { id: 'l4', symbol: '🧸', top: 44, left: 12, size: 30, rotation: 14, opacity: 0.12, duration: 7.6, delay: 1.8 },
    { id: 'l5', symbol: '💌', top: 58, left: 5, size: 24, rotation: -12, opacity: 0.14, duration: 6.4, delay: 0.9 },
    { id: 'l6', symbol: '🥰', top: 72, left: 10, size: 30, rotation: 10, opacity: 0.15, duration: 6.9, delay: 0.4 },
    { id: 'l7', symbol: '💞', top: 86, left: 6, size: 28, rotation: -16, opacity: 0.13, duration: 7.4, delay: 1.3 },
    { id: 'r1', symbol: '💘', top: 10, left: 90, size: 34, rotation: 18, opacity: 0.17, duration: 6.5, delay: 0.3 },
    { id: 'r2', symbol: '😊', top: 22, left: 84, size: 30, rotation: -10, opacity: 0.14, duration: 7.2, delay: 1.4 },
    { id: 'r3', symbol: '🌟', top: 34, left: 92, size: 26, rotation: 9, opacity: 0.12, duration: 5.9, delay: 0.7 },
    { id: 'r4', symbol: '😻', top: 48, left: 86, size: 28, rotation: -14, opacity: 0.13, duration: 7.7, delay: 2.1 },
    { id: 'r5', symbol: '🎀', top: 60, left: 93, size: 25, rotation: 12, opacity: 0.14, duration: 6.1, delay: 1.0 },
    { id: 'r6', symbol: '🫶', top: 74, left: 85, size: 32, rotation: -11, opacity: 0.15, duration: 7.0, delay: 0.5 },
    { id: 'r7', symbol: '💝', top: 88, left: 91, size: 29, rotation: 16, opacity: 0.13, duration: 6.8, delay: 1.6 },
];

export default function GlobalEmojiBackground() {

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#ff7294]/10 blur-[120px]" />
            <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#c39fff]/12 blur-[120px]" />

            {sideEmojis.map((item) => (
                <span
                    key={item.id}
                    className="absolute select-none animate-[float_6s_ease-in-out_infinite]"
                    style={{
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                        fontSize: `${item.size}px`,
                        transform: `rotate(${item.rotation}deg)`,
                        opacity: item.opacity,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                    }}
                >
                    {item.symbol}
                </span>
            ))}
        </div>
    );
}
