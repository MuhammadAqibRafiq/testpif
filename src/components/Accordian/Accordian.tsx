'use client'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Typography from '../ui/Typography';

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
    return (
        <div className="border border-primary-30 rounded-lg mb-2 overflow-hidden">
            <button
                className="w-full px-6 py-4 text-left transition-colors duration-200 flex justify-between items-center"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <Typography variant='bodyXLargeSB'  className="text-neutral-100">{title}</Typography>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-4 bg-white text-neutral-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({
    data = [],
    allowMultiple = true,
    className = "",
    defaultOpenItems = []
}: AccordionProps) => {
    const [openItems, setOpenItems] = useState(
        new Set(defaultOpenItems)
    );

    const toggleItem = (index: number) => {
        const newOpenItems = new Set(allowMultiple ? openItems : []);

        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            if (!allowMultiple) {
                newOpenItems.clear();
            }
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <>
            {data.map((item: AccordionItemData, index: number) => (
                <AccordionItem
                    key={index}
                    title={item?.title}
                    isOpen={openItems.has(index)}
                    onToggle={() => toggleItem(index)}
                >
                    {typeof item?.content === 'string' ? (
                        <p>{item?.content}</p>
                    ) : (
                        item?.content
                    )}
                </AccordionItem>
            ))}
        </>
    );
};

export default Accordion;


interface AccordionItemData {
    title: string;
    content: any;
}
interface AccordionProps {
    data: AccordionItemData[];
    allowMultiple?: boolean;
    className?: string;
    defaultOpenItems?: number[];
}

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}
