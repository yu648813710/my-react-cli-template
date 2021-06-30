import React, { useMemo } from "react";
import { ListProps, ListData } from "../../type/List";
import ListItem from "../ListItem";
import styles from './index.less'
import { FilterType } from "../../type/Filter"

const List: React.FC<ListProps> = ({ listData, onDel, onComplate, showType }) => {

  const delItem = (id: number) => {
    onDel(id)
  }

  const complateItem = (id: number) => {
    onComplate(id)
  }

  const filterListData = useMemo<ListData>(() => {
    return listData.filter(res => {
      switch(showType) {
        case FilterType.ALL:
        return true
        case FilterType.UNFINISHED:
        return !res.complete
        case FilterType.FINISHED:
        return res.complete
      }
    })
  }, [showType, listData] )

  return (
    <div className={styles.listBox}>
      {filterListData.length ? (
        filterListData.map((res) => <ListItem
          key={res.id}
          data={res}
          onDel={delItem}
          onComplate={complateItem}
        />)
      ) : (
        <h2>暂无数据</h2>
      )}
    </div>
  );
};

export default List;
