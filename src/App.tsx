// src/App.tsx
import { useState, useEffect, useMemo } from 'react';
import {
  Card, CardContent, CardHeader, CardTitle,
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { LanguageContentData, VocabularyCategory, VocabularyItem, InfoPoint } from '@/data/types';
import { japaneseContent } from '@/data/japaneseContent';
import { spanishContent } from '@/data/spanishContent';
import { ChevronDown, Heart, Globe2 } from 'lucide-react'; // Changed Palette to Globe2

type LanguageCode = 'jp' | 'es';

const availableLanguages: Record<LanguageCode, LanguageContentData> = {
  jp: japaneseContent,
  es: spanishContent,
};

interface VocabularyTablePropsStandalone {
  items: VocabularyItem[];
  content: LanguageContentData;
}
const VocabularyTableComponent: React.FC<VocabularyTablePropsStandalone> = ({ items, content }) => {
  if (!items || items.length === 0) {
    return <p className="text-y2k-text-muted p-4 text-center">No vocabulary items here yet! (｡•́︿•̀｡)</p>;
  }
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%] min-w-[120px]">{content.nativeTermKey.charAt(0).toUpperCase() + content.nativeTermKey.slice(1)}</TableHead>
            {content.transliterationTermKey && <TableHead className="w-[35%] min-w-[120px]">{content.transliterationTermKey.charAt(0).toUpperCase() + content.transliterationTermKey.slice(1)}</TableHead>}
            <TableHead className={content.transliterationTermKey ? "w-[30%] min-w-[100px]" : "w-[65%] min-w-[150px]"}>English</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className={cn("font-bold text-lg md:text-xl text-y2k-pink-dark", content.fontClass)}> {/* Main term in strong pink */}
                {item[content.nativeTermKey]}
              </TableCell>
              {content.transliterationTermKey && <TableCell className="text-y2k-text-muted italic font-medium text-sm">{item[content.transliterationTermKey]}</TableCell>}
              <TableCell className="font-medium text-sm text-y2k-text">{item.english}</TableCell> {/* English in default text color */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

interface LanguageSwitcherProps {
  currentLangCode: LanguageCode;
  onLangChange: (langCode: LanguageCode) => void;
}
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLangCode, onLangChange }) => {
  return (
    <nav className="mb-8 flex justify-center items-center space-x-3 p-2 bg-y2k-bg-alt rounded-y2k shadow-y2k-inner">
      <Globe2 className="h-5 w-5 text-y2k-pink-dark mr-2" /> {/* Changed to Globe2 and slightly smaller */}
      {(Object.keys(availableLanguages) as LanguageCode[]).map((langCode) => (
        <button
          key={langCode}
          onClick={() => onLangChange(langCode)}
          className={cn(
            "px-4 py-2 font-heading text-xs sm:text-sm font-bold rounded-y2k-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-y2k-pink-dark focus:ring-offset-2 focus:ring-offset-y2k-bg-alt", // Adjusted padding and text size
            "border-2",
            currentLangCode === langCode
              ? "bg-y2k-pink text-y2k-text-onPink border-y2k-pink-dark shadow-y2k-button shadow-y2k-pink-deepDark/70 animate-pulse-y2k"
              : "bg-y2k-bg-card text-y2k-text-header border-y2k-border hover:bg-y2k-pink-light hover:text-y2k-text-onPink hover:border-y2k-pink-dark"
          )}
        >
          {availableLanguages[langCode].name}
        </button>
      ))}
    </nav>
  );
};

const AppHeaderComponent: React.FC<{ content: LanguageContentData }> = ({ content }) => {
  return (
    <header className="mb-10 md:mb-12 text-center animate-fade-in">
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-y2k-pink mb-3 tracking-normal sm:tracking-wide text-shadow-pink-glow-header"
          style={{ WebkitTextStroke: '1.5px #2A0B3E' }}>
        {content.headerTitle}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-y2k-text max-w-2xl mx-auto font-heading font-medium px-2"> {/* Main text color for subtitle */}
        {content.headerSubtitle}
      </p>
    </header>
  );
};

interface GeneralInfoCardProps {
  title: string;
  icon?: React.ElementType;
  points?: InfoPoint[];
  intro?: string | React.ReactNode;
  pronunciationPoints?: LanguageContentData['pronunciationInfo']['points'];
  outro?: string | React.ReactNode;
  className?: string;
  currentFontClass: string;
}
const GeneralInfoCard: React.FC<GeneralInfoCardProps> = ({ title, icon: IconFromData, points, intro, pronunciationPoints, outro, className, currentFontClass }) => {
  const CardIcon = IconFromData || Heart;
  return (
    <Card className={cn("h-full flex flex-col shadow-y2k-soft hover:shadow-y2k-glow-strong shadow-y2k-pink-accent", className)}>
      <CardHeader>
        <CardTitle className="text-shadow-pink-glow-sm text-y2k-text-header"> {/* Card title with header text color */}
          <CardIcon className="inline-block mr-2.5 h-6 w-6 stroke-[2.5px] text-y2k-pink-dark" /> {/* Icon with stronger pink */}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base leading-relaxed space-y-3 flex-grow text-y2k-text"> {/* Card content with default text color */}
        {intro && (typeof intro === 'string' ? <p className="mb-3">{intro}</p> : <div className="mb-3">{intro}</div>)}
        {points && (
          <ul className="list-none space-y-3.5 pl-1">
            {points.map((point, index) => {
              const PointIcon = point.icon || Heart;
              return (
              <li key={index} className="flex items-start info-list-item">
                <PointIcon className="h-5 w-5 mr-3 mt-1 text-y2k-accent-blue flex-shrink-0" />
                <div>
                  <strong className="font-bold text-y2k-text-header">{point.strong}</strong>
                  {typeof point.text === 'string' ? <span> {point.text}</span> : point.text}
                </div>
              </li>
            )})}
          </ul>
        )}
        {pronunciationPoints && (
           <ul className="list-none space-y-2.5 pl-1">
            {pronunciationPoints.map((point, index) => (
              <li key={index} className="flex items-center font-medium">
                {point.char && <span className={cn("text-xl text-y2k-accent-purple mr-3 w-8 text-center font-display", currentFontClass)}>{point.char}</span>}
                <span className="text-y2k-text/90">{point.pronunciation} {typeof point.example === 'string' ? <span dangerouslySetInnerHTML={{ __html: point.example }}/> : point.example}</span>
              </li>
            ))}
          </ul>
        )}
        {outro && (typeof outro === 'string' ? <p className="mt-3 pt-3 border-t border-y2k-border/30">{outro}</p> : <div className="mt-3 pt-3 border-t border-y2k-border/30">{outro}</div>)}
      </CardContent>
    </Card>
  );
};

interface VocabularyAccordionProps {
  category: VocabularyCategory;
  index: number;
  content: LanguageContentData;
}
const VocabularyAccordionItem: React.FC<VocabularyAccordionProps> = ({ category, index, content }) => {
    const animationDelay = `${150 + index * 40}ms`;
    return (
        <details className="group animate-fade-in" style={{ animationDelay }}>
            <summary className="accordion-summary hover:shadow-y2k-soft shadow-y2k-pink-light">
                <span className='font-heading text-base sm:text-lg flex items-center text-y2k-text-header group-hover:text-y2k-text-onPink'> {/* Text color changes on hover */}
                  {category.title}
                </span>
                <ChevronDown className="accordion-chevron h-5 w-5 sm:h-6 sm:w-6" />
            </summary>
            <div className="accordion-content">
                 <VocabularyTableComponent items={category.items} content={content} />
            </div>
        </details>
    );
};

function App() {
  const [currentLangCode, setCurrentLangCode] = useState<LanguageCode>('jp');
  const currentContent = useMemo(() => availableLanguages[currentLangCode], [currentLangCode]);

  useEffect(() => {
    document.title = currentContent.pageTitle;
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (favicon && currentContent.customIcon) {
      favicon.href = currentContent.customIcon;
    }
  }, [currentContent]);

  return (
     <div className="min-h-screen p-3 pt-5 sm:p-4 sm:pt-6 md:p-6 md:pt-8 bg-y2k-bg text-y2k-text">
      <div className="container mx-auto max-w-6xl">
        <LanguageSwitcher currentLangCode={currentLangCode} onLangChange={setCurrentLangCode} />
        <AppHeaderComponent content={currentContent} />

        <section className="mb-10 md:mb-14 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <GeneralInfoCard
            title={currentContent.grammarInfo.title}
            icon={currentContent.grammarInfo.icon}
            points={currentContent.grammarInfo.points}
            className="animate-slide-in-left"
            currentFontClass={currentContent.fontClass}
          />
          <GeneralInfoCard
            title={currentContent.pronunciationInfo.title}
            icon={currentContent.pronunciationInfo.icon}
            intro={currentContent.pronunciationInfo.intro}
            pronunciationPoints={currentContent.pronunciationInfo.points}
            outro={currentContent.pronunciationInfo.outro}
            className="animate-slide-in-right"
            currentFontClass={currentContent.fontClass}
          />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-6 md:mb-8 text-y2k-accent-blue tracking-normal sm:tracking-wide text-shadow-hard-md"
                style={{ WebkitTextStroke: '1px #005A7D' }}>
                {currentContent.vocabularyTitle}
            </h2>
           <div className="space-y-4 max-w-4xl mx-auto">
                {currentContent.vocabulary.map((category, index) => (
                    <VocabularyAccordionItem
                        key={category.title + currentLangCode}
                        category={category}
                        index={index}
                        content={currentContent}
                    />
                ))}
            </div>
        </section>

        <footer className="text-center mt-12 md:mt-16 pb-6 text-y2k-text-muted text-sm font-medium animate-fade-in" style={{ animationDelay: '600ms'}}>
          {currentContent.footerCheer} © {new Date().getFullYear()} Happy Learning!
        </footer>
      </div>
    </div>
  );
}

export default App;