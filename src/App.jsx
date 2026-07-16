import { useState, useMemo } from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import SearchAndFilter from './components/SearchAndFilter';
import MerchantTable from './components/MerchantTable';
import merchantData from './data/merchantData';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('All');

  const filteredMerchants = useMemo(() => {
    return merchantData.filter((merchant) => {
      const matchesSearch = merchant.merchantName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRisk =
        riskFilter === 'All' || merchant.riskCategory === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [searchTerm, riskFilter]);

  return (
    <div className="app">
      <Header />
      <SummaryCards merchants={merchantData} />
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        riskFilter={riskFilter}
        setRiskFilter={setRiskFilter}
      />
      <MerchantTable merchants={filteredMerchants} />
    </div>
  );
}

export default App;
