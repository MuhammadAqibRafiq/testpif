import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button/Button';
import ThemeDebug from '@/components/ui/ThemeDebug';
import { ThemeViewer } from './themeViewer';
import Features from './Screens/Features';
import  Intro  from './Screens/Intro';
import InvestingProcess from './Screens/InvestingProcess';
import StockCrypto from './Screens/StockCrypto';
import JoinPIF from './Screens/JoinPIF';
import SimpleSteps from './Screens/SimpleSteps';

export default function Home() {
  return (

    <div style={{ marginTop: 'var(--navbar-height)'}}>
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

      <section id="stockCrypto">
        <StockCrypto />
      </section>

      <section id="simpleSteps">
        <SimpleSteps />
      </section>

      <section id="joinPIF">
        <JoinPIF />
      </section>

    </div>

  );
}
