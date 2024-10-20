import { FC, ReactNode, useMemo, useState } from "react";
import styles from "./Tabs.module.scss";
import { Tab } from "./components";
import { Franchise, Player } from "@utils/types";
import { Series } from "../Series";
import { Franchises } from "../Franchises";

type CreateTabContent = (options: {
  currentTab: number;
  series: Player["list"];
  franchises: Franchise[];
}) => ReactNode;

const createTabContent: CreateTabContent = ({
  currentTab,
  series,
  franchises,
}) => {
  switch (currentTab) {
    case 1:
      return <Series series={series} />;

    case 2:
      return <Franchises franchises={franchises} />;

    case 3:
      return <div></div>;
    default:
      return null;
  }
};

const tabs = [
  { label: "Серии", value: 1 },
  { label: "Список франшиз", value: 2 },
  { label: "Актеры озвучки", value: 3 },
];

type TabsProps = {
  series: Player["list"];
  franchises: Franchise[];
};

export const Tabs: FC<TabsProps> = ({ series, franchises }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const content = useMemo(
    () => createTabContent({ currentTab, series, franchises }),
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
