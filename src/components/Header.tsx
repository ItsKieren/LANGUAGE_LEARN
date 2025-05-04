import { BookOpenCheck, Sparkle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-theme-pink-vibrant to-theme-accent text-theme-white py-4 px-4 md:px-6 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95 border-b border-theme-accent/30">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3 group">
          <BookOpenCheck size={28} className="text-theme-white opacity-90 group-hover:scale-110 transition-transform duration-200" />
          <h1 className="text-2xl sm:text-3xl font-black tracking-tighter font-sans relative cursor-default">
            <span className="font-jp font-bold">にほんご学習</span>
            <span className="text-theme-pink-pale text-xs font-bold absolute -top-2.5 -right-6 rotate-12 bg-theme-pink-vibrant px-1.5 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">101</span>
             | Japanese Learning
          </h1>
        </div>
        <button className="y2k-button">
          <Sparkle size={14} className="inline-block mr-1.5 opacity-80" />
          Beginner Guide
        </button>
      </div>
    </header>
  );
};

export default Header;