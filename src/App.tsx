import React, { useState } from "react";
import "devextreme/dist/css/dx.light.css";
import HomePage from "./components/home-page";
import Table1 from "./components/table-1";
import Table2 from "./components/table-2";
import Table3 from "./components/table-3";
import "./App.css";

/**
 * Componente principal da aplicação de testes de tabelas
 * Gerencia a navegação entre as diferentes páginas/tabelas
 */
function App() {
    const [currentPage, setCurrentPage] = useState<"home" | "table1" | "table2" | "table3">("home");

    const renderCurrentPage = () => {
        switch (currentPage) {
            case "table1":
                return <Table1 onBack={() => setCurrentPage("home")} />;
            case "table2":
                return <Table2 onBack={() => setCurrentPage("home")} />;
            case "table3":
                return <Table3 onBack={() => setCurrentPage("home")} />;
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <div className="app">
            {renderCurrentPage()}
        </div>
    );
}

export default App;
