import Image from "next/image"

import {
  MoreHorizontal
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  TableCell,
  TableRow,
} from "@/components/ui/table"

export function VendingCard({machine}) {
  return (
    <>
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          className="aspect-square rounded-md object-cover"
          alt="VM img"
          height="64"
          width="64"
          src="/vm.svg"
        />
      </TableCell>
      <TableCell className="font-medium">
        {machine.location}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        ${machine.currentSales.toFixed(2)}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {machine.uptime}%
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {new Date(machine.time).toLocaleString()}
      </TableCell>
      <TableCell>
        <Badge variant="outline">
          {machine.isActive ? 'Active' : 'Inactive'}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {machine.alerts.type}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("clicked")}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
    </>
  );
}