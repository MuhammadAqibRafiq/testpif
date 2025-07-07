import Features from './Screens/Features';
import Intro from './Screens/Intro';
import InvestingProcess from './Screens/InvestingProcess';
import StockCrypto from './Screens/StockCrypto';
import JoinPIF from './Screens/JoinPIF';
import SimpleSteps from './Screens/SimpleSteps';
import PifInvest from './Screens/PifInvest';
import Comments from './Screens/Comments';
import FAQ from './Screens/FAQ';
import YoutubeSection from './Screens/YoutubeSection';
import ArticleSection from './Screens/ArticleSection';
import SubscribeEmail from './Screens/SubscribeEmail';
import Footer from './Screens/Footer';


export default function Home() {
  return (

    <div style={{ marginTop: 'var(--navbar-height)' }}>
      {/* //  <ThemeViewer /> */}
      <section id="intro">
        <Intro />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="investingProcess">
        <InvestingProcess />
      </section>

      {/* <section id="stockCrypto">
        <StockCrypto />
      </section> */}

      <section id="simpleSteps">
        <SimpleSteps />
      </section>

      <section id="pifInvest">
        <PifInvest />
      </section>

      <section id="joinPIF">
        <JoinPIF />
      </section>

      <section id="stockCrypto">
        <Comments />
      </section>

      <section id="FAQ">
        <FAQ />
      </section>

      <section id="youtube">
        <YoutubeSection />
      </section>

      <section id='articleSection'>
        <ArticleSection />
      </section>

      <section id='SubscribeEmail'>
        <SubscribeEmail />
      </section>



      <section id='footer'>
        <Footer />
      </section>

    </div>

  );
}





// import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
// import { getPayload } from 'payload'
// import React from 'react'
// import { fileURLToPath } from 'url'

// import config from '@/payload.config'
// import './styles.css'

// export default async function HomePage() {
//   const headers = await getHeaders()
//   const payloadConfig = await config
//   const payload = await getPayload({ config: payloadConfig })
//   const { user } = await payload.auth({ headers })

//   const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//   return (
//     <div className="home">
//       <div className="content">
//         <picture>
//           <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
//           <Image
//             alt="Payload Logo"
//             height={65}
//             src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
//             width={65}
//           />
//         </picture>
//         {!user && <h1>Welcome to your new project.</h1>}
//         {user && <h1>Welcome back, {user.email}</h1>}
//         <div className="links">
//           <a
//             className="admin"
//             href={payloadConfig.routes.admin}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Go to admin panel
//           </a>
//           <a
//             className="docs"
//             href="https://payloadcms.com/docs"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Documentation
//           </a>
//         </div>
//       </div>
//       <div className="footer">
//         <p>Update this page by editing</p>
//         <a className="codeLink" href={fileURL}>
//           <code>app/(frontend)/page.tsx</code>
//         </a>
//       </div>
//     </div>
//   )
// }
