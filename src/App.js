import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GridFunction = () => {
  const [rowCount, setRowCount] = useState("");
  const [colCount, setColCount] = useState("");

  const [RowcountArr, setRowCountArr] = useState([]);
  //const [arr1, setColCountArr] = useState([])
  const [appCount, setAppCount] = useState("");
  const [appCountArray, setAppCountArray] = useState([]);
  const [arr1, setArr1] = useState([]);
  const [dataMapp, setDataMap] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const Grid = async () => {
    setShowTable(false);
    console.log("hello");
    for (let i = 1; i <= rowCount; i++) {
      RowcountArr.push("trial" + i);
    }
    //setRowCountArr(RowcountArr)
    console.log(RowcountArr);

    const arr1 = [];
    for (let i = 1; i <= colCount; i++) {
      let x = {};
      for (let j = 1; j <= rowCount; j++) {
        x["trial" + j] = "" + j;
      }
      arr1.push(x);
    }
    setArr1(arr1);
    console.log(arr1);

    for (let i = 1; i <= appCount; i++) {
      appCountArray.push(i);
    }
    console.log(appCountArray);

    const dataMapp = RowcountArr.map((v) => ({ field: v }));
    console.log("dataMapp : ", dataMapp);
    setDataMap(dataMapp);

    setShowTable(true);
  };

  return (
    <div>
      <input
        type="text"
        id="txtrows"
        value={appCount}
        placeholder="Appraiser Count"
        onChange={(e) => setAppCount(e.target.value)}
      />
      <input
        type="text"
        id="txtrows"
        value={colCount}
        placeholder="Set Sample"
        onChange={(e) => setColCount(e.target.value)}
      />
      <input
        type="text"
        id="txtrows"
        value={rowCount}
        placeholder="Set Trial"
        onChange={(e) => setRowCount(e.target.value)}
      />
      <button onClick={Grid}>Create Table</button>
      {showTable ? (
        <div style={{ height: "200px", width: "400px", flex: "50%" }}>
          {appCountArray.map(() => (
            <AgGridReact
              className="ag-theme-alpine"
              rowData={arr1}
              columnDefs={dataMapp}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default GridFunction;
