import React from "react";
import { Button } from "devextreme-react/button";
import "./table-placeholder.css";

interface Table2Props {
    onBack: () => void;
}

/**
 * Componente Table2 - Placeholder para recursos avançados
 * @param onBack - Função para voltar à página inicial
 */
const Table2: React.FC<Table2Props> = ({ onBack }) => {
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
                        <h1>Tabela 2 - Recursos Avançados</h1>
                        <p>Em desenvolvimento - Funcionalidades avançadas do DataGrid</p>
                    </div>
                </div>
            </div>

            <div className="placeholder-content">
                <div className="placeholder-icon">📈</div>
                <h2>Recursos Avançados</h2>
                <p>Esta tabela incluirá:</p>
                <ul>
                    <li>Agrupamento de dados</li>
                    <li>Totalizadores e resumos</li>
                    <li>Edição inline</li>
                    <li>Validação de dados</li>
                    <li>Filtros customizados</li>
                    <li>Colunas virtuais</li>
                </ul>
                <div className="coming-soon">Em breve...</div>
            </div>
        </div>
    );
};

export default Table2;