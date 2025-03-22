import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SurveyDefinitions from "./pages/SurveyDefinitions";
import Disclaimer from "./pages/Disclaimer";
import ThirdPartySites from "./pages/ThirdPartySites";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import DisclaimerAndThirdParty from './pages/DisclaimerAndThirdParty';
import Terms from './pages/Terms';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/survey-definitions" element={<SurveyDefinitions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/third-party-sites" element={<ThirdPartySites />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer-and-third-party" element={<DisclaimerAndThirdParty />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
