import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import FinOpsDashboard from './pages/FinOpsDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Multi-Cloud Billing Dashboard Platform is currently orchestrating institutional cloud economics and optimizing global spend lifecycles. Automated cost allocation and unit economics synchronization will be fully operational once the global ingestion engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<FinOpsDashboard />} />
          <Route path="/breakdown" element={<Placeholder name="Multi-Cloud Cost Breakdown" />} />
          <Route path="/forecast" element={<Placeholder name="Predictive Cost Forecasting" />} />
          <Route path="/budgets" element={<Placeholder name="Budgets & Real-time Alerts" />} />
          <Route path="/anomalies" element={<Placeholder name="Anomaly Detection & Root Cause" />} />
          <Route path="/optimization" element={<Placeholder name="Savings & Optimization Hub" />} />
          <Route path="/chargeback" element={<Placeholder name="Chargeback & Showback Ledger" />} />
          <Route path="/unit-economics" element={<Placeholder name="Unit Economics (Cost per User/Service)" />} />
          <Route path="/reports" element={<Placeholder name="Executive FinOps Reporting" />} />
          <Route path="/governance" element={<Placeholder name="Cloud Cost Governance Policies" />} />
          <Route path="/settings" element={<Placeholder name="Platform & FinOps Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
