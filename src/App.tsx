import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Direct imports
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import FormSuccess from "./pages/FormSuccess";
import Surveys from "./pages/Surveys";

// Lazy load remaining pages
const SurveyDefinitions = lazy(() => import("./pages/SurveyDefinitions"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const ThirdPartySites = lazy(() => import("./pages/ThirdPartySites"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DisclaimerAndThirdParty = lazy(() => import('./pages/DisclaimerAndThirdParty'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#08979f]"></div>
  </div>
);

const App = () => (

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
);

export default App;
