import React from 'react';
// Import UI components
import {
  Card, CardContent, CardHeader, CardTitle,
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui';
// Import utility and data
import { cn } from '@/lib/utils';
import { vocabularyData, VocabularyCategory, VocabularyItem } from '@/data/vocabularyData';
// Import Icons
import { BookOpenCheck, ListChecks, Sparkles, Volume2, ChevronDown } from 'lucide-react';

// --- Header Component ---
const Header: React.FC = () => {
  return (
    <header className="mb-10 md:mb-16 text-center animate-fade-in">
       {/* Main title uses Primary (Pink) */}
       <h1 className="mx-4 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-primary mb-2 text-shadow-glow-primary-md animate-neon-flicker">
         Japanese Kickstart
       </h1>
      <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-semibold">
        Your first steps into Japanese grammar, sounds, and essential vocabulary! Let's learn!
      </p>
    </header>
  );
};

// --- Info Card Component ---
interface InfoCardProps {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ title, icon: IconComponent, children, className, titleClassName }) => {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardHeader>
         {/* Info Card titles use Primary (Pink) */}
        <CardTitle className={cn("text-primary", titleClassName)}>
          {IconComponent && <IconComponent className="inline-block mr-2 h-6 w-6 stroke-[2.5px] text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base leading-relaxed text-card-foreground space-y-5 flex-grow">
        {children}
      </CardContent>
    </Card>
  );
};

// --- Grammar Info Component ---
const GrammarInfo: React.FC = () => {
  return (
    <InfoCard title="Core Grammar Basics" icon={BookOpenCheck} className="animate-slide-in-left">
      <ul className="list-none space-y-5 pl-1">
        <li className="flex items-start info-list-item">
           {/* Icons use Secondary (Cyan) */}
          <ListChecks className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" />
          <div>
            {/* Strong tags use Secondary (Cyan) */}
            <strong className="font-bold text-secondary">Sentence Order:</strong>
             {/* Japanese examples use Accent (Green) */}
            <span>Often Subject-Object-Verb (SOV). Example: <span className="font-japanese font-bold text-accent">私はリンゴを食べます</span> (Watashi wa ringo o tabemasu) means 'I apple eat.'</span>
          </div>
        </li>
        <li className="flex items-start info-list-item">
         <ListChecks className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" />
          <div>
            <strong className="font-bold text-secondary">Particles are Key:</strong>
            {/* Code blocks use Accent (Green) */}
            <span>Tiny words like <code className="bg-background px-1.5 py-0.5 rounded text-accent font-bold">は (wa)</code>, <code className="bg-background px-1.5 py-0.5 rounded text-accent font-bold">が (ga)</code>, <code className="bg-background px-1.5 py-0.5 rounded text-accent font-bold">を (o)</code> mark a word's role. Essential!</span>
          </div>
        </li>
        <li className="flex items-start info-list-item">
          <ListChecks className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" />
          <div>
            <strong className="font-bold text-secondary">Politeness Levels:</strong>
            <span>Language changes based on context. Start polite: <code className="bg-background px-1.5 py-0.5 rounded text-accent font-bold">-ます (-masu)</code>.</span>
          </div>
        </li>
         <li className="flex items-start info-list-item">
           <ListChecks className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" />
          <div>
            <strong className="font-bold text-secondary">Dropping Pronouns:</strong>
            <span>'I' (<span className="font-japanese font-bold text-accent">私</span>) and 'You' (<span className="font-japanese font-bold text-accent">あなた</span>) often omitted when clear.</span>
          </div>
        </li>
      </ul>
    </InfoCard>
  );
};

// --- Vowel Info Component ---
const VowelInfo: React.FC = () => {
  return (
    <InfoCard title="Simple & Consistent Vowels" icon={Volume2} className="animate-slide-in-right">
       <ul className="list-none space-y-4 pl-1">
        <li className="flex items-start info-list-item">
           <Sparkles className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" /> {/* Cyan icon */}
           <div>
                {/* Strong tag Secondary (Cyan) */}
                <strong className="font-bold text-secondary">Just 5 Sounds!</strong>
                {/* Highlight Primary (Pink) */}
                <span>Japanese has only 5 pure vowel sounds. Unlike English, these sounds <strong className="text-primary">don't change</strong>. Predictable!</span>
            </div>
        </li>
        <div className="pl-6 space-y-2">
             {/* Japanese vowels use Accent (Green) */}
            <li className="flex items-center font-semibold">
                <span className="font-japanese text-xl text-accent mr-3 w-6 text-center">あ</span> (a) ≈ 'a' in "<strong className="font-sans text-foreground/70">fa</strong>ther"
            </li>
            <li className="flex items-center font-semibold">
                <span className="font-japanese text-xl text-accent mr-3 w-6 text-center">い</span> (i) ≈ 'ee' in "s<strong className="font-sans text-foreground/70">ee</strong>"
            </li>
            <li className="flex items-center font-semibold">
                <span className="font-japanese text-xl text-accent mr-3 w-6 text-center">う</span> (u) ≈ 'oo' in "f<strong className="font-sans text-foreground/70">oo</strong>d" (less round)
            </li>
            <li className="flex items-center font-semibold">
                <span className="font-japanese text-xl text-accent mr-3 w-6 text-center">え</span> (e) ≈ 'e' in "g<strong className="font-sans text-foreground/70">e</strong>t"
            </li>
            <li className="flex items-center font-semibold">
                <span className="font-japanese text-xl text-accent mr-3 w-6 text-center">お</span> (o) ≈ 'o' in "g<strong className="font-sans text-foreground/70">o</strong>"
            </li>
        </div>
         <li className="flex items-start info-list-item">
           <Sparkles className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" />
            <div>
                <strong className="font-bold text-secondary">Rhythm:</strong>
                <span>Most syllables = Consonant+Vowel (か ka) or just a Vowel. Creates a nice rhythm.</span>
            </div>
        </li>
      </ul>
    </InfoCard>
  );
};

// --- Vocabulary Table Component ---
interface VocabularyTableProps {
  items: VocabularyItem[];
}
const VocabularyTable: React.FC<VocabularyTableProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="text-muted-foreground p-4">No vocabulary items here yet!</p>;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="[&_th]:bg-transparent border-b border-border/50">
           {/* Headers use Accent (Green) */}
          <TableHead className="w-[35%]">Japanese</TableHead>
          <TableHead className="w-[35%]">Romaji</TableHead>
          <TableHead className="w-[30%]">English</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={index}>
             {/* Japanese terms use Primary (Pink) */}
            <TableCell className={cn("font-japanese font-bold text-lg md:text-xl text-primary")}>
              {item.japanese}
            </TableCell>
            <TableCell className="text-muted-foreground italic font-medium text-base">{item.romaji}</TableCell>
            <TableCell className="text-card-foreground font-medium text-base">{item.english}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// --- Vocabulary Accordion Item ---
interface VocabularyAccordionProps {
  category: VocabularyCategory;
  index: number;
}
const VocabularyAccordionItem: React.FC<VocabularyAccordionProps> = ({ category, index }) => {
    const animationDelay = `${600 + index * 60}ms`;

    return (
        <details className="group animate-fade-in shadow-md hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-secondary/40 rounded-lg overflow-hidden" style={{ animationDelay }}>
            <summary className="accordion-summary"> {/* Styles from index.css */}
                <span>{category.title}</span>
                <ChevronDown className="accordion-chevron h-6 w-6" />
            </summary>
            <div className="accordion-content"> {/* Styles from index.css */}
                 <VocabularyTable items={category.items} />
            </div>
        </details>
    );
};


// --- Main App Component ---
function App() {
  return (
     <div className="min-h-screen p-4 pt-6 md:p-8 md:pt-10">
      <div className="container mx-auto max-w-6xl">
        <Header />

        {/* Info Section */}
        <section className="mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <GrammarInfo />
          <VowelInfo />
        </section>

        {/* Vocabulary Section - Accordion */}
        <section>
             {/* Main Vocab title uses Secondary (Cyan) */}
            <h2 className="text-4xl md:text-5xl font-black text-center mb-8 md:mb-10 text-secondary text-shadow-glow-secondary-md animate-fade-in" style={{ animationDelay: '400ms'}}>
                Essential Vocabulary Lists
            </h2>
           <div className="space-y-4 max-w-4xl mx-auto">
                {vocabularyData.map((category, index) => (
                    <VocabularyAccordionItem
                        key={category.title}
                        category={category}
                        index={index}
                    />
                ))}
            </div>
        </section>

        <footer className="text-center mt-16 md:mt-20 text-muted-foreground text-base font-bold animate-fade-in" style={{ animationDelay: '1000ms'}}>
          Keep practicing! <span className="font-japanese text-primary font-extrabold text-shadow-glow-primary-xs">がんばって</span> (Ganbatte!) © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default App;