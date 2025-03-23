import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const SurveyDefinitions = lazy(() => import("./pages/SurveyDefinitions"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const ThirdPartySites = lazy(() => import("./pages/ThirdPartySites"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const DisclaimerAndThirdParty = lazy(() => import('./pages/DisclaimerAndThirdParty'));
const Terms = lazy(() => import('./pages/Terms'));
const FormSuccess = lazy(() => import('./pages/FormSuccess'));
const Surveys = lazy(() => import('./pages/Surveys'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#08979f]"></div>
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Router>
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/form-success" element={<FormSuccess />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </TooltipProvider>
);

export default App;
