import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Home', icon: 'home' },
    { to: '/love', label: 'Calculator', icon: 'favorite' },
    { to: '/flames', label: 'Flames', icon: 'local_fire_department' },
    { to: '/pickup', label: 'Pickup', icon: 'chat_bubble' },
    { to: '/date', label: 'Dates', icon: 'celebration' },
];

export default function GlobalBottomNav() {
    const location = useLocation();

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-50 flex justify-around items-end p-2 rounded-[2.5rem] bg-[#fff4f6]/95 backdrop-blur-2xl shadow-2xl border border-white/70">
            {navItems.map((item) => {
                const isActive = location.pathname === item.to;

                return (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={isActive
                            ? 'flex flex-col items-center justify-center bg-linear-to-br from-[#ff7294] to-[#b7004d] text-white rounded-full px-4 py-2 mb-1 shadow-lg transition-all active:scale-90'
                            : 'flex flex-col items-center justify-center text-[#4a2135]/55 p-2 hover:text-[#b7004d] transition-colors active:scale-90'}
                    >
                        <span className="material-symbols-outlined text-[18px] leading-none">{item.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
