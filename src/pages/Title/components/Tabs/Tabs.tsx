import { useMemo, useState } from "react";
import styles from "./Tabs.module.scss";
import { Tab } from "./components";

const createTabContent = (currentTab: number) => {
  switch (currentTab) {
    case 1:
      return <div>1</div>;
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

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const content = useMemo(() => createTabContent(currentTab), [currentTab]);
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {tabs.map(({ label, value }) => (
          <Tab
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
