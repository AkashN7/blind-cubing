"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import HeaderBuilder from "./header-builder";

type TabHeaderProps = {
  tabTitle: string;
  tabContent: React.ReactNode;
};

const TAB_HEADER_TEMPLATE = ({tabs}: {tabs: TabHeaderProps[]}) => {
  return (
    <div className="flex items-center h-full w-[300px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.tabTitle} value={tab.tabTitle}>
            {tab.tabTitle}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}

export default function TabHeader({tabs}: {tabs: TabHeaderProps[]}) {
  return (
    <Tabs defaultValue={tabs[0].tabTitle}>
      <HeaderBuilder components={[<TAB_HEADER_TEMPLATE key="tab-header-template" tabs={tabs} />]}/>
      {tabs.map((tab) => (
        <TabsContent key={tab.tabTitle} value={tab.tabTitle}>
          {tab.tabContent}
        </TabsContent>
      ))}
    </Tabs>
  );
}