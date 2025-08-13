import React, { useEffect, useState } from "react";
import DataGrid, {
    Column,
    Paging,
    Pager,
    SearchPanel,
    HeaderFilter,
    Sorting,
    Selection,
    Export,
    Toolbar,
    Item
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react/button";
import "./table-1.css";

interface Table1Props {
    onBack: () => void;
}

interface Employee {
    id: number;
    nome: string;
    email: string;
    idade: number;
    cargo: string;
    salario: number;
    departamento: string;
    dataAdmissao: string;
    ativo: boolean;
}

/**
 * Componente Table1 - DataGrid básico com funcionalidades essenciais
 * @param onBack - Função para voltar à página inicial
 */
const Table1: React.FC<Table1Props> = ({ onBack }) => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch("/mock-sample.json");
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);
    };

    const formatDate = (value: string) => {
        return new Date(value).toLocaleDateString("pt-BR");
    };

    const renderStatusCell = (cellData: any) => {
        const isActive = cellData.value;
        return (
            <span className={`status-badge ${isActive ? "active" : "inactive"}`}>
                {isActive ? "Ativo" : "Inativo"}
            </span>
        );
    };

    return (
        <div className="table-1-container">
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
                        <h1>Tabela 1 - DataGrid Básico</h1>
                        <p>Funcionalidades: Paginação, Busca, Filtros por Coluna, Ordenação e Exportação</p>
                    </div>
                </div>
            </div>

            <div className="table-content">
                <DataGrid
                    dataSource={employees}
                    keyExpr="id"
                    showBorders={true}
                    showRowLines={true}
                    showColumnLines={true}
                    rowAlternationEnabled={true}
                    allowColumnReordering={true}
                    allowColumnResizing={true}
                    columnAutoWidth={true}
                    wordWrapEnabled={true}
                    height={600}
                    loadPanel={{ enabled: loading }}
                >
                    <Toolbar>
                        <Item name="exportButton" />
                        <Item name="searchPanel" />
                    </Toolbar>

                    <Selection mode="multiple" showCheckBoxesMode="always" />
                    <Export 
                        enabled={true}
                        allowExportSelectedData={true}
                    />
                    <SearchPanel visible={true} width={240} placeholder="Buscar funcionários..." />
                    <HeaderFilter visible={true} />
                    <Sorting mode="multiple" />
                    
                    <Paging defaultPageSize={10} />
                    <Pager
                        showPageSizeSelector={true}
                        allowedPageSizes={[5, 10, 20, 50]}
                        showInfo={true}
                        showNavigationButtons={true}
                    />

                    <Column
                        dataField="id"
                        caption="ID"
                        width={80}
                        alignment="center"
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="nome"
                        caption="Nome"
                        minWidth={150}
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="email"
                        caption="E-mail"
                        minWidth={200}
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="idade"
                        caption="Idade"
                        width={100}
                        alignment="center"
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="cargo"
                        caption="Cargo"
                        minWidth={180}
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="salario"
                        caption="Salário"
                        width={130}
                        alignment="right"
                        format={formatCurrency}
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="departamento"
                        caption="Departamento"
                        width={150}
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="dataAdmissao"
                        caption="Data Admissão"
                        width={140}
                        alignment="center"
                        format="dd/MM/yyyy"
                        allowSorting={true}
                    />
                    
                    <Column
                        dataField="ativo"
                        caption="Status"
                        width={100}
                        alignment="center"
                        cellRender={renderStatusCell}
                        allowSorting={true}
                    />
                </DataGrid>
            </div>
        </div>
    );
};

export default Table1;