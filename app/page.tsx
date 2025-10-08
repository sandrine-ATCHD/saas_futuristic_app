'use client';


import Analytics from "./components/Analytics";
import Features from "./components/Features";
import Herostack from "./components/Herostack";
import Logo from "./components/Logo";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Herostack />
      <Logo />
      <Features/>
      <Analytics/>
      <Footer/>

      
      

    </div>
  );
}
