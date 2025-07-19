import { useState, useEffect } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Typography from '@/components/ui/Typography';
import { Kformatter } from '@/app/(frontend)/utils/Formatter/Kformatter';
import { reportDummyData } from '@/app/(frontend)/utils/DummyData/reportDummyData';



export const useReportCryptoController = () => {

    const headers = [
        { key: "srNo", label: "#" },
        { key: "nameComp", label: "Name" },
        { key: "marketCapComp", label: "Market Cap" },
        { key: "comfortRating", label: "Comfort Rating" }
    ];

    const maupulateName = (symbol: string, name: string, imageUrl: string) => {
        return (
            <div className="flex gap-[8px] items-center">
                <img src={imageUrl} width={28} height={28} alt={name} />
                <Typography variant="bodyLargeSB" className="text-neutral-100">
                    {symbol}
                </Typography>
                <Typography variant="bodyMediumR" className="text-neutral-60">
                    {name}
                </Typography>
            </div>
        );
    };

    const maupulateMarketCap = (marketCap: number) => {
        return (
            <div >
                <Typography variant="bodyLargeSB" className="text-neutral-100">
                    ${Kformatter(marketCap)}
                </Typography>
            </div>
        )
    }

    const rawData = reportDummyData

    const [filteredData, setFilteredData] = useState(rawData);


    const data = filteredData.map((item) => ({
        ...item,
        nameComp: maupulateName(item.symbol, item.name, item.image),
        marketCapComp: maupulateMarketCap(item.marketCap)
    }));


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            search: '', minMarketCap: '', maxMarketCap: ''
        },
        onSubmit: () => { },
    });

    // Filter logic: run every time search input changes
    useEffect(() => {
        const query = (formik.values.search ?? '').toLowerCase().trim();

        // Parse min/max caps only if not empty and valid number
        const minCap =
            formik.values.minMarketCap.trim() !== '' && !isNaN(Number(formik.values.minMarketCap))
                ? Number(formik.values.minMarketCap)
                : null;
        const maxCap =
            formik.values.maxMarketCap.trim() !== '' && !isNaN(Number(formik.values.maxMarketCap))
                ? Number(formik.values.maxMarketCap)
                : null;

        console.log('Filtering with:', { query, minCap, maxCap });

        const filtered = rawData.filter((item) => {
            const comfortText = item.comfortRating.props.label.toLowerCase();

            // Match text if query empty or any field includes query
            const matchesSearch =
                !query ||
                item.name.toLowerCase().includes(query) ||
                item.symbol.toLowerCase().includes(query) ||
                comfortText.includes(query);

            // Market cap filters only applied if minCap or maxCap not null
            const aboveMin = minCap === null ? true : item.marketCap >= minCap;
            const belowMax = maxCap === null ? true : item.marketCap <= maxCap;

            return matchesSearch && aboveMin && belowMax;
        });

        console.log('Filtered count:', filtered.length);
        setFilteredData(filtered);
    }, [formik.values.search, formik.values.minMarketCap, formik.values.maxMarketCap]);




    return {
        headers,
        formik,
        data
    };
};