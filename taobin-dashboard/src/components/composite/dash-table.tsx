'use client';
import {
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function DashTable({machine}) {
  return (
  <TableRow>
    <TableCell>
      <div className="font-medium text-[#513c2f]">{machine.id}</div>
      <div className="hidden text-sm text-muted-foreground md:inline">
        {machine.location}
      </div>
    </TableCell>
    <TableCell className="text-right">{machine.currentSales}</TableCell>
    <TableCell className="text-right">{machine.alerts.id}</TableCell>
    <TableCell className="text-right">{machine.uptime}%</TableCell>
    <TableCell className="text-right">{new Date(machine.time).toLocaleString()}</TableCell>
  </TableRow>
  )
}
