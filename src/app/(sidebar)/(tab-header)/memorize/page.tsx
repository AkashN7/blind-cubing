"use client";

import TabHeader from "@/components/header/tab-header";
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SAVE_TO_LOCAL_STORAGE, GET_FROM_LOCAL_STORAGE } from "@/utils/local-storage";
import DefaultLetterPairInfo from "@/constants/default-letter-pair-info.json";

type LetterPairInfo = {
  word: string;
  cornersAlgorithm?: string;
  edgesAlgorithm?: string;
};

const MEMO_LIST_CONTENT = () => {
  const [letterPairInfo, setLetterPairInfo] = useState<Record<string, Record<string, LetterPairInfo>>>(DefaultLetterPairInfo);
  const [pairFilter, setPairFilter] = useState('');
  const [wordFilter, setWordFilter] = useState('');

  useEffect(() => {
    const savedLetterPairInfo = GET_FROM_LOCAL_STORAGE('letterPairInfo');
    if (savedLetterPairInfo) {
      setLetterPairInfo(JSON.parse(savedLetterPairInfo));
    } else {
      SAVE_TO_LOCAL_STORAGE('letterPairInfo', JSON.stringify(DefaultLetterPairInfo));
      setLetterPairInfo(DefaultLetterPairInfo);
    }
  }, []);


  const filteredPairs = Object.entries(letterPairInfo).flatMap(([rowLetter, columns]) =>
    Object.entries(columns).map(([colLetter, { word, cornersAlgorithm, edgesAlgorithm }]) => ({
      pair: `${rowLetter}${colLetter}`,
      word,
      cornersAlgorithm,
      edgesAlgorithm,
    }))
  ).filter(({ pair, word }) =>
    pair.toLowerCase().includes(pairFilter.toLowerCase()) &&
    word.toLowerCase().includes(wordFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Memo List</h1>
      <p>Memorize the Rubik's Cube algorithms with our memorization tools.</p>
      <div className="flex gap-4 mb-4 mt-4">
        <Input
          placeholder="Search by letter pair"
          value={pairFilter}
          onChange={(e) => setPairFilter(e.target.value)}
        />
        <Input
          placeholder="Search by word"
          value={wordFilter}
          onChange={(e) => setWordFilter(e.target.value)}
        />
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-4 p-4 border-b font-semibold">
          <div className="w-24">Letter Pair</div>
          <div className="flex-grow">Word</div>
        </div>
        {filteredPairs.map(({ pair, word, cornersAlgorithm, edgesAlgorithm }) => (
          <div key={pair} className="flex items-center gap-4 p-4 border rounded">
            <div className="w-24">{pair}</div>
            <div className="flex-grow">{word}</div>
            <Button onClick={() => alert(cornersAlgorithm)}>Corners Algorithm</Button>
            <Button onClick={() => alert(edgesAlgorithm)}>Edges Algorithm</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const TRAINER_CONTENT = () => {
  return (
    <div>
      <h1>Trainer</h1>
      <p>Practice the Rubik's Cube algorithms with our training tools.</p>
    </div>
  );
};

const MEMORIZE_TABS = [
  {tabTitle: 'Memo List', tabContent: <MEMO_LIST_CONTENT />},
  {tabTitle: 'Trainer', tabContent: <TRAINER_CONTENT />}
];

export default function Memorize() {
  return (
    <TabHeader tabs={MEMORIZE_TABS} />
  );
}