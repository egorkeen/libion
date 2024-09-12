import { FC, ReactNode, useMemo, useState } from "react";
import styles from "./Tabs.module.scss";
import { Tab } from "./components";
import { Player } from "@utils/types";
import { Series } from "../Series";

type CreateTabContent = (options: {
  currentTab: number;
  series: Player["list"];
}) => ReactNode;

const createTabContent: CreateTabContent = ({ currentTab, series }) => {
  switch (currentTab) {
    case 1:
      return <Series series={series} />;
    case 2:
      return <div>2</div>;
    default:
      return null;
  }
};

const tabs = [
  { label: "Серии", value: 1 },
  { label: "Актеры", value: 2 },
];

type TabsProps = {
  series: Player["list"];
};

export const Tabs: FC<TabsProps> = ({ series }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const content = useMemo(
    () => createTabContent({ currentTab, series }),
    [currentTab],
  );
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {tabs.map(({ label, value }) => (
          <Tab
            key={label}
            label={label}
            isActive={value === currentTab}
            onClick={() => setCurrentTab(value)}
          />
        ))}
      </div>
      <div className={styles.tabContent}>{content}</div>
    </div>
  );
};
