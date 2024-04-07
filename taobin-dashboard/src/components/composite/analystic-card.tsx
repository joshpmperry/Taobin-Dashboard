import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import {
  Activity,
  CreditCard,
  DollarSign,
  Package2,
} from "lucide-react"

export default function AnalysticCard() {
  const [data, setData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [salesToday, setSalesToday] = useState(0);
  const [activeMachines, setActiveMachines] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5050/machine')
      .then(res => res.json())
      .then(fetchdata => {
        setData(fetchdata);

        // Calculate total sales
        const total = fetchdata.reduce((sum, machine) => sum + machine.currentSales, 0);
        setTotalSales(total);

        // Calculate sales today (assuming currentSales is today's sales)
        const today = fetchdata.reduce((sum, machine) => {
          const machineDate = new Date(machine.time);
          const now = new Date();
          if (machineDate.getDate() === now.getDate() &&
              machineDate.getMonth() === now.getMonth() &&
              machineDate.getFullYear() === now.getFullYear()) {
            return sum + machine.currentSales;
          }
          return sum;
        }, 0);
        setSalesToday(today);

        // Calculate active machines
        const active = fetchdata.filter(machine => machine.isActive).length;
        setActiveMachines(active);
      });
  }, []);

  const currentDate = new Date();
  console.log(currentDate.toLocaleDateString());

  
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Revenue
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#481D24]">${totalSales*45}</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Sold Today
          </CardTitle>
          <Package2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#481D24]">+{salesToday}</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from yesterday
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#481D24]">+{totalSales}</div>
          <p className="text-xs text-muted-foreground">
            +19% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Machines</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#481D24]">{activeMachines}</div>
          <p className="text-xs text-muted-foreground">
            currently active
          </p>
        </CardContent>
      </Card>
    </>
  );
}