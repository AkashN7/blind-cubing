import TabHeader from "@/components/header/tab-header";

const MEMO_ONLY_CONTENT = () => {
  return (
    <div>
      <h1>Memo Only</h1>
      <p>Memorize the Rubik's Cube algorithms with our memorization tools.</p>
    </div>
  );
};

const FULL_SOLVE_CONTENT = () => {
  return (
    <div>
      <h1>Full Solve</h1>
      <p>Practice the Rubik's Cube algorithms with our training tools.</p>
    </div>
  );
};

const TRAINER_TABS = [
  {tabTitle: 'Memo Only', tabContent: <MEMO_ONLY_CONTENT />},
  {tabTitle: 'Full Solve', tabContent: <FULL_SOLVE_CONTENT />}
];

export default function Timer() {
  return (
    <TabHeader tabs={TRAINER_TABS} />
  );
}