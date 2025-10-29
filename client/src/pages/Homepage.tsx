import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Impact } from "../components/Impact";
import { Testimonials } from "../components/Testimonials";

function Homepage() {
return (
 <main className="grow">
   <Hero />
   <Features />
   <Impact />
   <HowItWorks />
   <Testimonials />
   <FAQ />
 </main>
);
}
export default Homepage