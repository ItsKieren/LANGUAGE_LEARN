import React from 'react'; // Added React import back - good practice even if technically optional sometimes
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CardContent } from '@/components/ui/card'; // Correctly only importing CardContent

// Define the shape of individual vocab items
interface VocabItem {
  kanji?: string;
  exampleWord?: string;
  hiragana: string;
  romaji: string;
  meaning: string;
}

// Define the props for the VocabularyTable component
interface VocabularyTableProps {
  type: 'kanji' | 'hiragana' | 'mixed';
  data: VocabItem[];
  themeColorClass?: string; // Tailwind text color class, e.g., text-theme-pink-vibrant
}

// Helper function OUTSIDE the component for clarity
const getBorderColorClass = (textColorClass: string | undefined): string => {
    switch(textColorClass) {
        case 'text-theme-pink-vibrant': return 'border-theme-pink-vibrant/50';
        case 'text-theme-accent': return 'border-theme-accent/50';
        case 'text-theme-purple': return 'border-theme-purple/50';
        case 'text-theme-blue': return 'border-theme-blue/50';
        default: return 'border-theme-medium-gray/50'; // Fallback
    }
};

// The actual Functional Component
const VocabularyTable: React.FC<VocabularyTableProps> = ({ type, data, themeColorClass = 'text-theme-pink-vibrant' }) => {
  const isKanji = type === 'kanji';
  const isHiragana = type === 'hiragana';
  const headers = isKanji
    ? ['Kanji', 'Example', 'Reading', 'Romaji', 'Meaning']
    : isHiragana
      ? ['Hiragana', 'Romaji', 'Meaning/Use']
      : ['Term', 'Reading', 'Romaji', 'Meaning'];

  const headerBorderColor = getBorderColorClass(themeColorClass);

  // Explicit return statement for the JSX
  return (
    // Using table-card component class from index.css for outer styling
    <div className="table-card">
      {/* Using CardContent for consistent padding if needed, otherwise remove inner padding */}
      <CardContent className="p-0 flex-grow">
        <div className="overflow-x-auto h-full">
          <Table className="min-w-full h-full">
            <TableHeader>
              <TableRow className={`border-b-2 ${headerBorderColor} bg-theme-light-gray hover:bg-theme-light-gray`}>
                {headers.map((header, index) => (
                   <TableHead key={header}
                     className={`table-header-cell ${themeColorClass} ${index === 0 ? (isKanji || isHiragana ? 'w-1/4 text-center' : 'w-1/3 text-left') : '' } ${header === 'Kanji' ? 'w-[100px]' : ''} ${header === 'Hiragana' ? 'w-[150px]' : ''}`}
                   >
                     {header}
                   </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-theme-medium-gray/50">
              {/* Map over the data prop */}
              {data && data.map((item, index) => ( // Added check for data existence
                <TableRow key={index} className="hover:bg-theme-pink-pale/30 transition-colors duration-200 ease-in-out">
                  {/* Conditional Rendering based on type */}
                  {isKanji && (
                    <>
                      <TableCell className="kanji-cell">{item.kanji || '?'}</TableCell>
                      <TableCell className="vocab-cell font-jp">{item.exampleWord}</TableCell>
                      <TableCell className="vocab-cell font-jp text-gray-600">{item.hiragana}</TableCell>
                      <TableCell className="vocab-cell font-sans text-gray-500">{item.romaji}</TableCell>
                      <TableCell className="meaning-cell font-sans">{item.meaning}</TableCell>
                    </>
                  )}
                  {isHiragana && (
                    <>
                      <TableCell className="hiragana-cell">{item.hiragana}</TableCell>
                      <TableCell className="vocab-cell font-sans text-gray-500">{item.romaji}</TableCell>
                      <TableCell className="meaning-cell font-sans">{item.meaning}</TableCell>
                    </>
                  )}
                  {type === 'mixed' && (
                     <>
                       <TableCell className="vocab-cell font-jp font-semibold text-theme-dark px-4 py-4 align-middle">{item.exampleWord || item.hiragana}</TableCell>
                       <TableCell className="vocab-cell font-jp text-gray-600">{item.hiragana}</TableCell>
                       <TableCell className="vocab-cell font-sans text-gray-500">{item.romaji}</TableCell>
                       <TableCell className="meaning-cell font-sans">{item.meaning}</TableCell>
                     </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </div>
  );
};

// Ensure the default export is present and correct
export default VocabularyTable;