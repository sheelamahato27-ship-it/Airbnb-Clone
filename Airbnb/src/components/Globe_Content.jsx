import React, { useState } from 'react';

const Globe_Content = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 1. STATE TRACKERS
  const [activeTab, setActiveTab] = useState('language'); 
  const [isTranslationOn, setIsTranslationOn] = useState(true);
  const [selectedLang, setSelectedLang] = useState({ lang: "English", country: "India" });
  const [selectedCurrency, setSelectedCurrency] = useState({ name: "Indian Rupee", code: "INR", symbol: "₹" });

  // 2. DATASETS
  const languagesData = [
    { lang: "English", country: "India" },
    { lang: "Azərbaycan dili", country: "Azərbaycan" },
    { lang: "Bahasa Indonesia", country: "Indonesia" },
    { lang: "Bosanski", country: "Bosna i Hercegovina" },
    { lang: "Català", country: "Espanya" },
    { lang: "Čeština", country: "Česká republika" },
    { lang: "Crnogorski", country: "Crna Gora" },
    { lang: "Dansk", country: "Danmark" },
    { lang: "Deutsch", country: "Deutschland" },
    { lang: "Deutsch", country: "Österreich" },
    { lang: "Deutsch", country: "Schweiz" },
    { lang: "Eesti", country: "Eesti" },
    { lang: "English", country: "Australia" },
    { lang: "English", country: "Canada" },
    { lang: "English", country: "United Kingdom" },
    { lang: "English", country: "United States" },
    { lang: "Español", country: "Argentina" },
    { lang: "Español", country: "España" },
    { lang: "Français", country: "France" },
    { lang: "Italiano", country: "Italia" }
  ];

  const currencyData = [
    { name: "Indian Rupee", code: "INR", symbol: "₹" },
    { name: "United States Dollar", code: "USD", symbol: "$" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "British Pound", code: "GBP", symbol: "£" },
    { name: "Australian Dollar", code: "AUD", symbol: "$" },
    { name: "Canadian Dollar", code: "CAD", symbol: "$" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Singapore Dollar", code: "SGD", symbol: "$" },
    { name: "New Zealand Dollar", code: "NZD", symbol: "$" },
    { name: "United Arab Emirates Dirham", code: "AED", symbol: "د.إ" },
    { name: "Saudi Riyal", code: "SAR", symbol: "ر.س" },
    { name: "Swiss Franc", code: "CHF", symbol: "CHf" },
    { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
    { name: "Hong Kong Dollar", code: "HKD", symbol: "$" },
    { name: "South Korean Won", code: "KRW", symbol: "₩" }
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4">
      
      {/* Main Modal Box Wrapper Container */}
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-3xl p-6 relative flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Bar: Close Button */}
        <div className="flex items-center mb-2 shrink-0">
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 font-medium text-lg w-9 h-9 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Dynamic Tab Switch Header Bar */}
        <div className="flex gap-6 border-b border-gray-200 text-sm font-semibold pb-3 text-gray-500 mb-6 shrink-0">
          <span 
            onClick={() => setActiveTab('language')}
            className={`pb-3 cursor-pointer hover:bg-gray-300  rounded transition select-none ${activeTab === 'language' ? 'text-gray-900 border-2 border-black' : 'hover:text-gray-900'}`}
          >
            Language and region
          </span>
          <span 
            onClick={() => setActiveTab('currency')}
            className={`pb-3 cursor-pointer hover:bg-gray-300  rounded transition select-none ${activeTab === 'currency' ? 'text-gray-900 border-2 border-black' : 'hover:text-gray-900'}`}
          >
            Currency
          </span>
        </div>

        {/* Scrollable Main Layout Body Content */}
        <div className="overflow-y-auto flex-1 pr-2 space-y-8 text-left pb-4">
          
          {/* ========================================================= */}
          {/* VIEW A: LANGUAGE AND REGION VIEW                          */}
          {/* ========================================================= */}
          {activeTab === 'language' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Translation Bar Banner */}
              <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <div>
                  <h4 className="text-sm font-normal text-gray-900 flex items-center gap-2">Translation 🌐</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Automatically translate descriptions and reviews to English.</p>
                </div>
                <button 
                  onClick={() => setIsTranslationOn(!isTranslationOn)}
                  className={`w-12 h-7 rounded-full flex items-center p-0.5 cursor-pointer transition-colors duration-300 focus:outline-none
                    ${isTranslationOn ? 'bg-black justify-end' : 'bg-gray-300 justify-start'}`}
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-md">
                    {isTranslationOn ? <span className="text-black text-[9px]">✓</span> : <span className="text-gray-400 text-[9px]">✕</span>}
                  </div>
                </button>
              </div>

              {/* Suggested Section */}
              <div>
                <h3 className="font-bold text-base text-gray-900 mb-4">Suggested languages and regions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    <div className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer"><p className="text-sm text-gray-900">English</p><p className="text-xs text-gray-400 ">India</p></div>
                  <div className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer"><p className="text-sm text-gray-900">English</p><p className="text-xs text-gray-400 ">United Kingdom</p></div>
                  <div className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer"><p className="text-sm text-gray-900">English</p><p className="text-xs text-gray-400 ">United States</p></div>
                  <div className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer"><p className="text-sm text-gray-900">हिन्दी</p><p className="text-xs text-gray-400 ">भारत</p></div>
                  <div className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer"><p className="text-sm text-gray-900"> اُردُو</p><p className="text-xs text-gray-400 "> اِنڈِیا</p></div>
                   <div className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer"><p className="text-sm text-gray-900"> मराठी </p><p className="text-xs text-gray-400 ">भारत </p></div>
                   
                </div>
              </div>

              {/* Choose Language Grid */}
              <div>
                <h3 className="font-bold text-base text-gray-900 mb-4">Choose a language and region</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {languagesData.map((item, index) => {
                    const isActive = selectedLang.lang === item.lang && selectedLang.country === item.country;
                    return (
                      <div 
                        key={index} 
                        onClick={() => setSelectedLang(item)}
                        className={`p-3 rounded-xl cursor-pointer text-left transition duration-150 border
                          ${isActive ? 'border-gray-900 bg-gray-50/50 font-semibold' : 'hover:bg-gray-50 border-transparent'}`}
                      >
                        <p className="text-sm text-gray-900">{item.lang}</p>
                        <p className={`text-xs font-light mt-0.5 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>{item.country}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW B: CURRENCY VIEW                                     */}
          {/* ========================================================= */}
          {activeTab === 'currency' && (
            <div className="animate-fadeIn">
              <h3 className="font-bold text-base text-gray-900 mb-4">Choose a currency</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {currencyData.map((currency, index) => {
                  const isCurrencyActive = selectedCurrency.code === currency.code;
                  return (
                    <div 
                      key={index}
                      onClick={() => setSelectedCurrency(currency)}
                      className={`p-3 rounded-xl cursor-pointer text-left transition duration-150 border flex flex-col justify-between h-20 min-h-20
                        ${isCurrencyActive ? 'border-gray-900 bg-gray-50/50 font-semibold' : 'hover:bg-gray-50 border-transparent'}`}
                    >
                      <p className="text-sm text-gray-900 leading-tight">{currency.name}</p>
                      <p className={`text-xs mt-1 ${isCurrencyActive ? 'text-gray-900 font-semibold' : 'text-gray-500 font-light'}`}>
                        {currency.code} — {currency.symbol}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Globe_Content;