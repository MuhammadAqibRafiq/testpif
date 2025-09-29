import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StockData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  icon?: string
}

interface CarouselStockCardProps {
  stock: StockData
}

export default function Carousel({ stock }: CarouselStockCardProps) {
  const isPositive = stock.change >= 0

  return (
    <Card className="min-w-[280px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {stock.icon && (
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-bold">{stock.symbol.slice(0, 2)}</span>
              </div>
            )}
            <div>
              <CardTitle className="text-sm">{stock.symbol}</CardTitle>
              <p className="text-xs text-muted-foreground">{stock.name}</p>
            </div>
          </div>
          <Badge variant={isPositive ? "default" : "destructive"}>
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold">${stock.price.toFixed(2)}</div>
          <div className={`text-sm flex items-center space-x-1 ${isPositive ? "text-green-600" : "text-red-600"}`}>
            <span>
              {isPositive ? "+" : ""}
              {stock.change.toFixed(2)}
            </span>
            <span>
              ({isPositive ? "+" : ""}
              {stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
