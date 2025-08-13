import React from "react";
import "./home-page.css";

interface HomePageProps {
    onNavigate: (page: "table1" | "table2" | "table3") => void;
}

/**
 * Página inicial da aplicação com navegação para as diferentes tabelas
 * @param onNavigate - Função para navegar entre as páginas
 */
const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <div className="home-page">
            <div className="home-container">
                <h1 className="home-title">Teste de Tabelas</h1>
                <p className="home-subtitle">
                    Aplicação para testar diferentes implementações de tabelas usando DevExtreme
                </p>
                
                <div className="buttons-container">
                    <button 
                        className="table-button table-button-1"
                        onClick={() => onNavigate("table1")}
                    >
                        <span className="button-icon">📊</span>
                        <span className="button-text">Tabela 1</span>
                        <span className="button-description">DataGrid Básico</span>
                    </button>
                    
                    <button 
                        className="table-button table-button-2"
                        onClick={() => onNavigate("table2")}
                    >
                        <span className="button-icon">📈</span>
                        <span className="button-text">Tabela 2</span>
                        <span className="button-description">Recursos Avançados</span>
                    </button>
                    
                    <button 
                        className="table-button table-button-3"
                        onClick={() => onNavigate("table3")}
                    >
                        <span className="button-icon">🎯</span>
                        <span className="button-text">Tabela 3</span>
                        <span className="button-description">Customizações</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;