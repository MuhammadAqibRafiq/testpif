'use client'
import Chip from "@/components/Chip/Chip";
import { CustomTable } from "@/components/Table/CustomTable1";
import Typography from "@/components/ui/Typography";
import AppleIcon from "@/assets/images/AppleIcon.png"
import BitCoinIcon from "@/assets/images/BitCoinIcon.png"
import Image from 'next/image'
import InputField from "@/components/InputField/InputField";
import { useFormik } from "formik";
import JoinPIF from "../../Screens/JoinPIF";
import Footer from "../../Screens/Footer";
import { useEffect, useState } from "react";

export default function CryptoReport() {

  const headers = [
    { key: "srNo", label: "#" },
    { key: "name", label: "Name" },
    { key: "marketCap", label: "Market Cap" },
    { key: "comfortRating", label: "Comfort Rating" }
  ];

  const maupulateName = () => {
    return (
      <div>
        <div className="flex gap-[8px] items-center">
          <Image src={AppleIcon} className="w-[28px] h-[28px]" alt="AppleIcon" />
          <Typography variant="bodyLargeSB" className="text-neutral-100">
            BTC
          </Typography>
          <Typography variant="bodyMediumR" className="text-neutral-60">
            Bitcoin
          </Typography>
        </div>
      </div>
    )
  }

  const maupulateMarketCap = () => {
    return (
      <div >
        <Typography variant="bodyLargeSB" className="text-neutral-100">
          $12.36 T
        </Typography>
      </div>
    )
  }

  const data = [
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Uncomfortable" bgColor="var(--color-error-50)" /> },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },
    { name: maupulateName(), marketCap: maupulateMarketCap(), comfortRating: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, },

  ];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
    },
    // validationSchema: yup.object({
    //     email: yup.string().email('Invalid email').required('Email is required'),
    // }),
    onSubmit: () => { },
  });

  return (
    <div style={{ marginTop: 'var(--navbar-height)' }}>


      <div className="max-w-7xl mx-auto max-xl:px-6 padding-y-xl">
        <Typography variant='h3' className='text-center text-neutral-100'>
          Halal Crypto Report
        </Typography>

        <div className="pt-[40px] flex justify-between items-center">
          <div className='max-w-[480px] w-full'>
            <InputField
              className='w-full'
              placeholder="Search name, ticker, rating"
              formik={formik}
              fieldName="email"
            />
          </div>


          <div className="flex items-center gap-[16px]">
            <Typography variant="bodyMediumSB">Market Cap:</Typography>
            <div className='max-w-[200px] w-full'>
              <InputField
                className='w-full'
                placeholder="Min"
                formik={formik}
                fieldName="email"
              />
            </div>
            <Typography variant="bodyMediumSB">-</Typography>

            <div className='max-w-[200px] w-full'>
              <InputField
                className='w-full'
                placeholder="Max"
                formik={formik}
                fieldName="email"
              />
            </div>
          </div>
        </div>

        <div className="pt-[32px]">
          <CustomTable
            headers={headers}
            data={data}
          />

        </div>
      </div>

      <section id="joinPIF">
        <JoinPIF />
      </section>

      <section id='footer'>
        <Footer />
      </section>

    </div>

  );
}