"use client";
import React, { useEffect } from "react";
import CartBox from "@/components/productCart";
import { DataType } from "@/types/data.types";
import useDataStore from "@/store/data/dataStore";

const Skincare = () => {
  const { loading, data, error, fetchData } = useDataStore();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <div className="font-semibold text-3xl">Skincare</div>
        <div className="text-[#2A8BE7] text-[17px] font-semibold">
          {"Hammasini ko'rish >"}
        </div>
      </div>
      {loading && <h1>Loading...</h1>}
      <div className="flex gap-8 overflow-x-scroll overflow-hidden lg:overflow-auto py-4">
        {data?.map((data: DataType) => {
          if (data.category == "skincare") {
            return (
              <div key={data.id}>
                <CartBox data={data} />
              </div>
            );
          }
        })}
      </div>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Skincare;
