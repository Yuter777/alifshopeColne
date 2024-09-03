"use client";

import { DataType } from "@/types/data.types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState<DataType[]>([]);

  return (
    <div>
      <div className="flex gap-2">
        <div className="">Savat</div>
        <div className="">{data.length} tovarlar</div>
      </div>
      <div className="">
        {data &&
          data.map((item: DataType) => (
            <div className="flex gap-3 py-4 border-b" key={item.id}>
              <div className="">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <div className="">{item.title}</div>
                <div className="">Narx: {item.price}$</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
