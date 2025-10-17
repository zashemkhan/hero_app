// import React, { useState } from 'react';
import { Fullscreen } from "lucide-react";
import { PiFunnelLight } from "react-icons/pi";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RechartData = ({ detailsApp }) => {
  if (!detailsApp?.ratings) return null;
  const data = [...detailsApp.ratings]
    .sort((a, b) => b.name - a.name)
    .map((r) => ({
      name: r.name,
      count: r.count,
    }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} layout="vertical">
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={50} />
          <Tooltip />
          <Bar dataKey="count" barSize={40} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RechartData;
