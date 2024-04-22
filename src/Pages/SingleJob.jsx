import React from "react";
import {useParams } from "react-router-dom";
// import "./SingleJob.css";
import { TenRecord } from "../TenRecords";
import { BringSingleJob } from "../PageComponents/Jobs/BringSingleJob";

function SingleJob() {
  // console.log(TenRecord)
  let { id } = useParams();
  // console.log(id)
  const record =  TenRecord.filter((item) => (item.id) === parseInt(id));
  // console.log(record)
  return (
    <div className="bg-light">
      <div className="container-lg container-fluid p-md-5">
        <BringSingleJob data={record.length>0 && parseInt(record[0].id)===parseInt(id) ? record[0] : false} />
      </div>
    </div>
  );
}
export default SingleJob;
