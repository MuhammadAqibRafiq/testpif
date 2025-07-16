import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  interface HeaderItem {
    key: string
    label: string
  }
  
  interface CustomTableProps {
    caption?: string
    headers: HeaderItem[]
    data: Array<Record<string, any>>
    showFooter?: boolean
    footerText?: string
    footerAmountKey?: string
  }
  
  export function CustomTable({
    caption,
    headers,
    data,
    showFooter = false,
    footerText = "Total",
    footerAmountKey,
  }: CustomTableProps) {
    return (
      <Table className="border-t border-b border-gray-200">
        {caption && <TableCaption>{caption}</TableCaption>}
  
        <TableHeader>
          <TableRow>
            {headers.map((header, idx) => (
              <TableHead
                key={header.key}
                className="p-4 text-bodyLarge"
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
  
        <TableBody>
          {data?.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, colIndex) => {
                let value
  
                // Automatically handle "srNo"
                if (header.key === "srNo") {
                  value = rowIndex + 1
                } else {
                  value = row[header.key] ?? "-"
                }
  
                return (
                  <TableCell key={header.key} className="p-4">
                    {value}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
  
        {/* Optional footer logic (unchanged) */}
        {showFooter && footerAmountKey && (
          <TableFooter>
            <TableRow>
              <TableCell className="p-4" colSpan={headers.length - 1}>
                {footerText}
              </TableCell>
              <TableCell className="p-4 text-right">
                {data
                  .reduce(
                    (sum, row) =>
                      sum + (parseFloat(row[footerAmountKey]) || 0),
                    0
                  )
                  .toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    )
  }
  