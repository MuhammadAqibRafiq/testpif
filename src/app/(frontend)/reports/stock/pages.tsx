'use client'
import { CustomTable } from "@/components/Table/CustomTable1";
import InputField from "@/components/InputField/InputField";
import JoinPIF from "../../Screens/JoinPIF";
import Footer from "../../Screens/Footer";
import { useReportCryptoController } from "../../Controller/Reports/Crypto";
import Typography from "@/components/ui/Typography";

export default function CryptoReport() {

  const { formik, headers, data } = useReportCryptoController()

  return (
    <div style={{ marginTop: 'var(--navbar-height)' }}>


      <div className="max-w-7xl mx-auto max-xl:px-6 padding-y-xl">
        <Typography variant='h3' className='text-center text-neutral-100'>
        Halal Stocks Report
        </Typography>

        <div className="pt-[40px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Search Input */}
          <div className='md:max-w-[250px] lg:max-w-[320px] xl:max-w-[480px] w-full'>
            <InputField
              className='w-full'
              placeholder="Search name, ticker, rating"
              formik={formik}
              fieldName="search"
            />
          </div>

          {/* Market Cap Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-[16px]">
            <Typography variant="bodyMediumSB">Market Cap:</Typography>

            {/* Min/Max inputs - stacked on small screens, inline on larger screens */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-[16px]">
              <div className='md:max-w-[100px] lg:max-w-[200px] w-full'>
                <InputField
                  className='w-full'
                  placeholder="Min"
                  formik={formik}
                  fieldName="minMarketCap"
                />
              </div>

              <Typography variant="bodyMediumSB" className="hidden sm:block">-</Typography>

              <div className='md:max-w-[100px] lg:max-w-[200px] w-full'>
                <InputField
                  className='w-full'
                  placeholder="Max"
                  formik={formik}
                  fieldName="maxMarketCap"
                />
              </div>
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
