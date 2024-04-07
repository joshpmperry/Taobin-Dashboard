'use client';
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import DashSales from "../composite/dash-sales";




export default function RecentSales({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '6'
  
  const [sales, setSales] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5050/sales')
      .then(res => {
        return res.json();
      })
      .then(fetchdata => {
        setSales(fetchdata);
      })
  }, []);

  const start = (Number(page) - 1) * Number(per_page) 
  const end = start + Number(per_page) 
  const salesEntries = sales.slice(start, end)

  return (
    <>
    <CardHeader>
      <CardTitle>Recent Sales</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-8">
      {salesEntries.map((entry, index) => ( <DashSales sale={entry}/> ))}
    </CardContent>
    </>
  )
}
