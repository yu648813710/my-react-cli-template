import React from "react";
import { FilterType, FilterButtonData, FilterProps } from "../../type/Filter";
import styles from "./index.less";

const filterButtonData: FilterButtonData = [
  {
    key: FilterType.ALL,
    value: "全部",
  },
  {
    key: FilterType.FINISHED,
    value: "完成",
  },
  {
    key: FilterType.UNFINISHED,
    value: "未完成",
  },
];

const Filter: React.FC<FilterProps> = ({ onSelect, showType }) => {
  return (
    <div className={styles.filterBox}>
      {filterButtonData.map((res) => (
        <button
          key={res.key}
          onClick={() => {
            onSelect(res.key);
          }}
          className={showType === res.key ? styles.active : ""}
        >
          {res.value}
        </button>
      ))}
    </div>
  );
};

export default Filter;
