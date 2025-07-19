// components/Table/CustomTable.tsx

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
import { CustomPagination } from "./CustomPagination"
import { useEffect, useState } from "react"

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
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    useEffect(() => {
        setCurrentPage(1)
    }, [rowsPerPage])

    const totalPages = Math.ceil(data.length / rowsPerPage)
    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    )

    return (
        <>
            <Table className="border-t border-b border-gray-200">
                {caption && <TableCaption>{caption}</TableCaption>}

                <TableHeader>
                    <TableRow>
                        {headers.map((header) => (
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
                    {paginatedData?.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {headers.map((header) => {
                                let value

                                if (header.key === "srNo") {
                                    value = (currentPage - 1) * rowsPerPage + rowIndex + 1
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

            <div className="pt-[32px] flex flex-col sm:flex-row sm:items-center sm:justify-between">
    {/* Pagination - Full width on small screens only */}
    <div className="order-1 w-full flex justify-center mb-4 sm:hidden">
        <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
    </div>
    
    {/* Original layout for larger screens, modified layout for small screens */}
    <div className="order-2 flex justify-between items-center sm:contents">
        <div className="flex justify-end items-center gap-2">
            <label className="text-bodyMediumR text-neutral-60">Show</label>
            <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                className="border rounded px-2 py-1 text-sm"
            >
                {[5, 10, 20, 50].map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>

        {/* Pagination for larger screens only */}
        <div className="hidden sm:block">
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>

        <div className="text-bodyMediumR text-neutral-100">
            {`${(currentPage - 1) * rowsPerPage + 1} - ${Math.min(
                currentPage * rowsPerPage,
                data.length
            )} of ${data.length}`}
        </div>
    </div>
</div>
        </>
    )
}
