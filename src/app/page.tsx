import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button/Button';
import ThemeDebug from '@/components/ui/ThemeDebug';
import { ThemeViewer } from './themeViewer';
import Features from './Screens/Features';
import  Intro  from './Screens/Intro';
import InvestingProcess from './Screens/InvestingProcess';

export default function Home() {
  return (

    <>
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

    </>

  );
}
