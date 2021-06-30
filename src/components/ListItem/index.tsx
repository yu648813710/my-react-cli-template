import React from "react";
import { ListItemProps } from "../../type/List";
import styles from "./index.less";

const ListItem: React.FC<ListItemProps> = ({ data, onDel, onComplate }) => {
  const delItem = (id: number) => {
    onDel(id);
  };

  const complateItem = (id: number) => {
    onComplate(id);
  };

  return (
    data.isShow && (
      <div
        className={[styles.itemBox, data.complete ? styles.complateItem : ""].join(
          " "
        )}
      >
        <p>{data.value}</p>
        {!data.complete && (
          <span
            title="删除"
            className={styles.del}
            onClick={() => {
              delItem(data.id);
            }}
          >
            -
          </span>
        )}
        {!data.complete && (
          <span
            title="完成"
            className={styles.completa}
            onClick={() => {
              complateItem(data.id);
            }}
          >
            |
          </span>
        )}
      </div>
    )
  );
};

export default ListItem;
