import React from "react";
import { Button } from "devextreme-react/button";
import "./table-placeholder.css";

interface Table3Props {
    onBack: () => void;
}

/**
 * Componente Table3 - Placeholder para customizações
 * @param onBack - Função para voltar à página inicial
 */
const Table3: React.FC<Table3Props> = ({ onBack }) => {
    return (
        <div className="table-placeholder-container">
            <div className="table-header">
                <div className="header-content">
                    <Button
                        text="← Voltar"
                        type="normal"
                        stylingMode="outlined"
                        onClick={onBack}
                        className="back-button"
                    />
                    <div className="header-info">
                        <h1>Tabela 3 - Customizações</h1>
                        <p>Em desenvolvimento - Customizações avançadas e temas</p>
                    </div>
                </div>
            </div>

            <div className="placeholder-content">
                <div className="placeholder-icon">🎯</div>
                <h2>Customizações Avançadas</h2>
                <p>Esta tabela incluirá:</p>
                <ul>
                    <li>Temas customizados</li>
                    <li>Células personalizadas</li>
                    <li>Componentes customizados</li>
                    <li>Animações e transições</li>
                    <li>Layouts responsivos avançados</li>
                    <li>Integração com gráficos</li>
                </ul>
                <div className="coming-soon">Em breve...</div>
            </div>
        </div>
    );
};

export default Table3;