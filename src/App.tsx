import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, useRef } from "react";
import BootScreen from "./components/BootScreen.tsx";
import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

/* ── page transition wrapper ─────────────────────────────── */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    // Same route — skip
    if (prevPath.current === location.pathname) {
      setDisplayChildren(children);
      return;
    }

    prevPath.current = location.pathname;
    setTransitioning(true);

    // Wait for fade-out, then swap content + fade-in
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitioning(false);
      window.scrollTo({ top: 0 });
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div
      className={`transition-[opacity,transform] duration-300 ${
        transitioning
          ? 'opacity-0 translate-y-2'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {displayChildren}
    </div>
  );
};

/* ── main app ────────────────────────────────────────────── */
const App = () => {
  const [booted, setBooted] = useState(false);

  // Check session — only show boot screen once per session
  useEffect(() => {
    if (sessionStorage.getItem('rez-booted')) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('rez-booted', '1');
    setBooted(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!booted && <BootScreen onComplete={handleBootComplete} />}
        <BrowserRouter>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;