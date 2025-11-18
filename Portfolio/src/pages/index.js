import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
       <Section grid> 
        <Hero />
        <BgAnimation /> 
      </Section> 
      <Timeline />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
