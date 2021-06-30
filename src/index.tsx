import React, { useEffect, useReducer } from "react";
import styles from "./index.less";
import Add from "./components/Add";
import List from "./components/List";
import Filter from "./components/Filter";
import { action, initData } from "./Store/store";
import { ListItem } from "./type/List";
import { ShowType } from "./type/Filter";

export default () => {
  const [storeData, setStore] = useReducer(action, initData);

  const onAddListData = (val) => {
    const idIterationVal = initData.idIteration + 1;

    const itemData: ListItem = {
      id: idIterationVal,
      value: val,
      complete: false,
      isShow: true,
    };

    const listDataVal = [...initData.listData, itemData];

    setStore({
      key: "listData",
      value: listDataVal,
    });

    setStore({
      key: "idIteration",
      value: idIterationVal,
    });
  };

  const delItem = (id: number) => {
    const showData = storeData.listData.map((res) => {
      if (res.id === id) {
        res.isShow = false;
      }

      return res;
    });

    setStore({
      key: "listData",
      value: showData,
    });
  };

  const complateItem = (id: number) => {
    const complateData = storeData.listData.map((res) => {
      if (res.id === id) {
        res.complete = true;
      }

      return res;
    });

    setStore({
      key: "listData",
      value: complateData,
    });
  };

  const filterData = (key: ShowType) => {
    setStore({
      key: "showType",
      value: key,
    });
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>ToDo List</h1>
      <Add onAddListData={onAddListData} />
      <Filter onSelect={filterData} showType={storeData.showType}/>
      <List
        listData={storeData.listData}
        onDel={delItem}
        onComplate={complateItem}
        showType={storeData.showType}
      />
    </div>
  );
};
