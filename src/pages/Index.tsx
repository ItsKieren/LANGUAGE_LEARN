import Header from '@/components/Header';
import VocabularyTable from '@/components/VocabularyTable';
import { kanjiExamples, hiraganaWords, months, timeWords } from '@/data/vocabularyData';
import { Languages, MicVocal, Sparkles, CalendarDays, Clock, CheckCircle } from 'lucide-react';

interface VocabItem {
    kanji?: string;
    exampleWord?: string;
    hiragana: string;
    romaji: string;
    meaning: string;
}

const mapToVocabItem = (item: any): VocabItem => ({
    exampleWord: item.kanji || item.hiragana,
    hiragana: item.hiragana,
    romaji: item.romaji,
    meaning: item.meaning,
    kanji: item.kanji
});

// Helper component for list items in intro cards
const InfoListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start gap-2">
        <CheckCircle size={18} className="text-theme-pink-vibrant opacity-80 mt-1 flex-shrink-0" />
        <span>{children}</span>
    </li>
);


const Index = () => {
  return (
    <div className="min-h-screen bg-theme-pink-pale bg-pattern-dots-subtle">
      <Header />
      <main className="container mx-auto py-12 px-4 md:py-16 space-y-16 md:space-y-20">

        {/* Section 1: Intro (Split & Rewritten) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="intro-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                 <h3 className="text-2xl font-black mb-5 flex items-center gap-2.5 text-gradient-pink">
                    <Languages size={26} className="text-theme-purple opacity-80"/>
                    Core Grammar Basics
                </h3>
                <div className="text-base text-gray-800 space-y-4 leading-relaxed font-sans">
                    <ul className="space-y-3">
                        <InfoListItem> Sentence Order: Often Subject-Object-Verb (SOV). English is SVO. Example: <span className="font-jp font-medium text-sm bg-theme-light-gray px-1 rounded">私は りんごを 食べます</span> (Watashi wa ringo o tabemasu) means "I apple eat." </InfoListItem>
                        <InfoListItem> Particles are Key: Tiny words like <span className="font-jp font-medium">は</span> (wa), <span className="font-jp font-medium">が</span> (ga), <span className="font-jp font-medium">を</span> (o) mark a word's role (topic, subject, object). They're essential! </InfoListItem>
                        <InfoListItem> Politeness Levels: Language changes based on who you're talking to. Start with the polite verb ending <span className="font-jp font-medium">-ます</span> (-masu). </InfoListItem>
                         <InfoListItem> Dropping Pronouns: 'I' (<span className="font-jp font-medium">私</span>) and 'You' (<span className="font-jp font-medium">あなた</span>) are often left out if the context makes it clear. </InfoListItem>
                    </ul>
                 </div>
            </div>
            <div className="intro-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                 <h3 className="text-2xl font-black mb-5 flex items-center gap-2.5 text-gradient-pink">
                    <MicVocal size={26} className="text-theme-accent opacity-80"/>
                    Simple & Consistent Vowels
                </h3>
                 <div className="text-base text-gray-800 space-y-4 leading-relaxed font-sans">
                     <p className="flex items-start gap-2"> <CheckCircle size={18} className="text-theme-pink-vibrant opacity-80 mt-1 flex-shrink-0" /> <span>Japanese has only 5 pure vowel sounds. Unlike English (which has many more!), these sounds *don't change*.</span> </p>
                    <ul className="list-none space-y-1.5 my-2 font-medium bg-theme-light-gray p-4 rounded-xl border border-theme-medium-gray/50 text-lg">
                        <li><span className="font-jp font-black text-theme-pink-vibrant mr-2">あ (a)</span> ≈ 'a' in "f<u>a</u>ther"</li>
                        <li><span className="font-jp font-black text-theme-pink-vibrant mr-2">い (i)</span> ≈ 'ee' in "s<u>ee</u>"</li>
                        <li><span className="font-jp font-black text-theme-pink-vibrant mr-2">う (u)</span> ≈ 'oo' in "f<u>oo</u>d" (less lip rounding)</li>
                        <li><span className="font-jp font-black text-theme-pink-vibrant mr-2">え (e)</span> ≈ 'e' in "g<u>e</u>t"</li>
                        <li><span className="font-jp font-black text-theme-pink-vibrant mr-2">お (o)</span> ≈ 'o' in "g<u>o</u>"</li>
                    </ul>
                     <p className="flex items-start gap-2"> <CheckCircle size={18} className="text-theme-pink-vibrant opacity-80 mt-1 flex-shrink-0" /> <span>Most syllables are a Consonant + Vowel (like <span className="font-jp font-medium">か ka, き ki, く ku</span>...) or just a vowel. This creates a predictable rhythm.</span> </p>
                 </div>
            </div>
        </section>

        {/* Section 2: Core Vocab */}
        <section className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-10">
              <div className="flex flex-col animate-slide-in-left">
                <h2 className="section-title"> <Sparkles size={26} className="inline-block mr-2 opacity-80" />Kanji Spotlight </h2>
                <VocabularyTable type="kanji" data={kanjiExamples} themeColorClass="text-theme-pink-vibrant"/>
              </div>
              <div className="flex flex-col animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                 <h2 className="section-title"> <Sparkles size={26} className="inline-block mr-2 opacity-80" />Essential Hiragana </h2>
                <VocabularyTable type="hiragana" data={hiraganaWords} themeColorClass="text-theme-accent"/>
              </div>
        </section>

        <hr className="border-dashed border-theme-accent/50 border-t-2 my-12 md:my-16 max-w-xs mx-auto animate-fade-in" style={{ animationDelay: '0.15s' }}/>

        {/* Section 3: Time & Months */}
        <section className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-10">
           <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <h2 className="section-title"> <span className="text-theme-purple"><CalendarDays size={26} className="inline-block mr-2 opacity-80" />Months of the Year</span> </h2>
             <VocabularyTable type="mixed" data={months.map(mapToVocabItem)} themeColorClass="text-theme-purple"/>
          </div>
          <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.3s' }}>
             <h2 className="section-title"> <span className="text-theme-blue"><Clock size={26} className="inline-block mr-2 opacity-80" />Time Related</span> </h2>
             <VocabularyTable type="mixed" data={timeWords.map(mapToVocabItem)} themeColorClass="text-theme-blue"/>
          </div>
        </section>
      </main>

      {/* Footer Section - Fixed */}
      <footer className="bg-gradient-to-r from-theme-pink-vibrant to-theme-accent text-theme-white p-8 md:p-12 text-center mt-20 md:mt-24 border-t-4 border-theme-pink-soft/50">
        <p className="text-2xl md:text-3xl font-black font-jp mb-2 tracking-tight">日本語を勉強しましょう！</p>
        <p className="text-base font-sans font-medium opacity-90">(Let's study Japanese!)</p>
      </footer>
    </div>
  );
};

export default Index;
