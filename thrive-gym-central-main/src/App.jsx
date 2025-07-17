import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";


import DashboardHome from "@/components/DashboardHome";
import EmployeesManagement from "@/components/EmployeesManagement";
import FinancialManagement from "@/components/FinancialManagement";
import PauseRequestsManagement from "@/components/PauseRequestsManagement";
import MembersManagement from "@/components/MembersManagement";
import NotificationsManagement from "@/components/NotificationsManagement";
import TrainersSection from "@/components/TrainersSection";
import WebsiteManagement from "@/components/WebsiteManagement";
import Settings from "@/components/Settings";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Index />} />

 
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/employees" element={<EmployeesManagement />} />
          <Route path="/finance" element={<FinancialManagement />} />
          <Route path="/pause-requests" element={<PauseRequestsManagement />} />
          <Route path="/members" element={<MembersManagement />} />
          <Route path="/notifications" element={<NotificationsManagement />} />
          <Route path="/trainers" element={<TrainersSection />} />
          <Route path="/website" element={<WebsiteManagement />} />
          <Route path="/settings" element={<Settings />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
