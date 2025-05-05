// src/data/vocabularyData.ts
export interface VocabularyItem {
  japanese: string;
  romaji: string;
  english: string;
}

export interface VocabularyCategory {
  title: string;
  items: VocabularyItem[];
}

// --- PASTE THE FULL vocabularyData array from the previous response here ---
// (It's long, so just indicating to reuse the previous version)
export const vocabularyData: VocabularyCategory[] = [
  {
    title: "Greetings & Basic Phrases",
    items: [
      { japanese: "おはようございます", romaji: "Ohayou gozaimasu", english: "Good morning (formal)" },
      { japanese: "おはよう", romaji: "Ohayou", english: "Good morning (informal)" },
      { japanese: "こんにちは", romaji: "Konnichiwa", english: "Hello / Good afternoon" },
      { japanese: "こんばんは", romaji: "Konbanwa", english: "Good evening" },
      { japanese: "さようなら", romaji: "Sayounara", english: "Goodbye (formal/final)" },
      { japanese: "じゃあね", romaji: "Jaa ne", english: "See you / Bye (informal)" },
      { japanese: "またね", romaji: "Mata ne", english: "See you later (informal)" },
      { japanese: "おやすみなさい", romaji: "Oyasuminasai", english: "Good night" },
      { japanese: "ありがとう", romaji: "Arigatou", english: "Thank you" },
      { japanese: "ありがとうございます", romaji: "Arigatou gozaimasu", english: "Thank you (formal)" },
      { japanese: "すみません", romaji: "Sumimasen", english: "Excuse me / I'm sorry" },
      { japanese: "はい", romaji: "Hai", english: "Yes" },
      { japanese: "いいえ", romaji: "Iie", english: "No" },
      { japanese: "お願いします", romaji: "Onegaishimasu", english: "Please (requesting)" },
      { japanese: "どうぞ", romaji: "Douzo", english: "Please (offering) / Here you go" },
    ],
  },
  {
    title: "Numbers (1-10)",
    items: [
      { japanese: "いち", romaji: "Ichi", english: "One" },
      { japanese: "に", romaji: "Ni", english: "Two" },
      { japanese: "さん", romaji: "San", english: "Three" },
      { japanese: "し / よん", romaji: "Shi / Yon", english: "Four" },
      { japanese: "ご", romaji: "Go", english: "Five" },
      { japanese: "ろく", romaji: "Roku", english: "Six" },
      { japanese: "しち / なな", romaji: "Shichi / Nana", english: "Seven" },
      { japanese: "はち", romaji: "Hachi", english: "Eight" },
      { japanese: "く / きゅう", romaji: "Ku / Kyuu", english: "Nine" },
      { japanese: "じゅう", romaji: "Juu", english: "Ten" },
    ],
  },
  {
    title: "Days of the Week",
    items: [
      { japanese: "月曜日", romaji: "Getsuyoubi", english: "Monday" },
      { japanese: "火曜日", romaji: "Kayoubi", english: "Tuesday" },
      { japanese: "水曜日", romaji: "Suiyoubi", english: "Wednesday" },
      { japanese: "木曜日", romaji: "Mokuyoubi", english: "Thursday" },
      { japanese: "金曜日", romaji: "Kinyoubi", english: "Friday" },
      { japanese: "土曜日", romaji: "Doyoubi", english: "Saturday" },
      { japanese: "日曜日", romaji: "Nichiyoubi", english: "Sunday" },
      { japanese: "今日", romaji: "Kyou", english: "Today" },
      { japanese: "明日", romaji: "Ashita", english: "Tomorrow" },
      { japanese: "昨日", romaji: "Kinou", english: "Yesterday" },
    ],
  },
  {
    title: "Basic Nouns",
    items: [
      { japanese: "ひと", romaji: "Hito", english: "Person" },
      { japanese: "ともだち", romaji: "Tomodachi", english: "Friend" },
      { japanese: "がくせい", romaji: "Gakusei", english: "Student" },
      { japanese: "せんせい", romaji: "Sensei", english: "Teacher" },
      { japanese: "にほん", romaji: "Nihon", english: "Japan" },
      { japanese: "にほんご", romaji: "Nihongo", english: "Japanese language" },
      { japanese: "えいご", romaji: "Eigo", english: "English language" },
      { japanese: "ほん", romaji: "Hon", english: "Book" },
      { japanese: "つくえ", romaji: "Tsukue", english: "Desk" },
      { japanese: "いす", romaji: "Isu", english: "Chair" },
      { japanese: "みず", romaji: "Mizu", english: "Water" },
      { japanese: "ごはん", romaji: "Gohan", english: "Rice / Meal" },
      { japanese: "パン", romaji: "Pan", english: "Bread" },
      { japanese: "ねこ", romaji: "Neko", english: "Cat" },
      { japanese: "いぬ", romaji: "Inu", english: "Dog" },
    ],
  },
  {
    title: "Common Verbs (Dictionary Form)",
    items: [
      { japanese: "たべる", romaji: "Taberu", english: "To eat" },
      { japanese: "のむ", romaji: "Nomu", english: "To drink" },
      { japanese: "みる", romaji: "Miru", english: "To see / watch" },
      { japanese: "きく", romaji: "Kiku", english: "To listen / hear / ask" },
      { japanese: "よむ", romaji: "Yomu", english: "To read" },
      { japanese: "かく", romaji: "Kaku", english: "To write" },
      { japanese: "はなす", romaji: "Hanasu", english: "To speak" },
      { japanese: "いく", romaji: "Iku", english: "To go" },
      { japanese: "くる", romaji: "Kuru", english: "To come" },
      { japanese: "する", romaji: "Suru", english: "To do" },
      { japanese: "べんきょうする", romaji: "Benkyou suru", english: "To study" },
    ],
  },
  {
    title: "Simple Adjectives (i-adjectives)",
    items: [
      { japanese: "おおきい", romaji: "Ookii", english: "Big" },
      { japanese: "ちいさい", romaji: "Chiisai", english: "Small" },
      { japanese: "あたらしい", romaji: "Atarashii", english: "New" },
      { japanese: "ふるい", romaji: "Furui", english: "Old (things)" },
      { japanese: "いい / よい", romaji: "Ii / Yoi", english: "Good" },
      { japanese: "わるい", romaji: "Warui", english: "Bad" },
      { japanese: "たかい", romaji: "Takai", english: "Expensive / High" },
      { japanese: "やすい", romaji: "Yasui", english: "Cheap" },
      { japanese: "おいしい", romaji: "Oishii", english: "Delicious" },
      { japanese: "たのしい", romaji: "Tanoshii", english: "Fun" },
    ],
  },
   {
    title: "Question Words",
    items: [
      { japanese: "なに / なん", romaji: "Nani / Nan", english: "What" },
      { japanese: "どこ", romaji: "Doko", english: "Where" },
      { japanese: "だれ", romaji: "Dare", english: "Who" },
      { japanese: "いつ", romaji: "Itsu", english: "When" },
      { japanese: "どうして / なぜ", romaji: "Doushite / Naze", english: "Why" },
      { japanese: "どう", romaji: "Dou", english: "How" },
      { japanese: "どれ", romaji: "Dore", english: "Which (of three or more)" },
      { japanese: "どの", romaji: "Dono", english: "Which (+ noun)" },
      { japanese: "いくら", romaji: "Ikura", english: "How much (cost)" },
    ],
  },
];