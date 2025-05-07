// src/data/types.ts
import React from 'react';

export interface VocabularyItem {
  [key: string]: string;
  english: string;
}

export interface VocabularyCategory {
  title: string;
  items: VocabularyItem[];
  // icon?: React.ElementType; // Removed icon from here
}

export interface InfoPoint {
  strong: string;
  text: string | React.ReactNode;
  icon?: React.ElementType;
}

export interface PronunciationPoint {
  char?: string;
  pronunciation: string;
  example: string | React.ReactNode;
}

export interface LanguageContentData {
  code: 'jp' | 'es';
  name: string;
  fontClass: string;
  nativeTermKey: string;
  transliterationTermKey?: string;

  pageTitle: string;
  headerTitle: string | React.ReactNode;
  headerSubtitle: string;

  grammarInfo: {
    title: string;
    icon?: React.ElementType;
    points: InfoPoint[];
  };
  pronunciationInfo: {
    title: string;
    icon?: React.ElementType;
    intro: string | React.ReactNode;
    points: PronunciationPoint[];
    outro?: string | React.ReactNode;
  };
  vocabularyTitle: string;
  vocabulary: VocabularyCategory[];
  footerCheer: string | React.ReactNode;
  customIcon?: string;
}