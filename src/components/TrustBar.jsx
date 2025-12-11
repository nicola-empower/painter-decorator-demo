const defaultItems = [
    { title: "100% Dust Free", subtitle: "Advanced Extraction", icon: Wind, colorClass: "text-blue-500" },
    { title: "Dulux Select", subtitle: "Accredited Craftsmanship", icon: Brush, colorClass: "text-red-500" },
    { title: "500+ Homes", subtitle: "Portfolio of Perfection", icon: Home, colorClass: "text-green-500" }
];

const TrustBar = ({ theme = 'light', items = defaultItems }) => {
    const isDark = theme === 'dark';
    const baseClass = isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100";
    const textClass = isDark ? "text-gray-300" : "text-gray-600";
    const iconClass = isDark ? "text-gray-400" : "text-gray-400";

    return (
        <div className={`w-full py-8 border-y ${baseClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">

                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 group cursor-default">
                            {item.icon && <item.icon size={32} className={`${iconClass} ${item.colorClass} transition-colors`} />}
                            <div className="flex flex-col">
                                <span className={`font-bold leading-tight ${textClass}`}>{item.title}</span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-400">{item.subtitle}</span>
                            </div>
                        </div>
                    ))}

                    {/* Payment Methods */}
                    <div className="flex items-center gap-4 border-l border-gray-200 pl-8 hidden md:flex">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">We Accept</span>
                        <div className="flex gap-2">
                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold text-xs">VISA</div>
                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold text-xs">MC</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustBar;
