import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionItemData {
  id: string
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItemData[]
  type?: "single" | "multiple"
  collapsible?: boolean
  className?: string
}

export default function Accordion({ items, type = "single", collapsible = true, className }: AccordionProps) {
  return (
    <ShadcnAccordion type={type} collapsible={collapsible} className={className}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  )
}
