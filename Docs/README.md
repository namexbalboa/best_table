# Best Table - Aplicação de Testes de Tabelas

## Visão Geral

Esta aplicação foi desenvolvida para testar e demonstrar diferentes implementações de tabelas usando **DevExtreme React DataGrid**. O projeto serve como uma base de inspiração para outros projetos que necessitem de componentes de tabela robustos e funcionais.

## Tecnologias Utilizadas

- **React 18+** com TypeScript
- **Vite** como bundler e servidor de desenvolvimento
- **DevExtreme React** para componentes de tabela
- **CSS3** com design responsivo e moderno
- **Node.js 20.19.0**

## Estrutura do Projeto

```
best_table/
├── src/
│   ├── components/
│   │   ├── home-page.tsx          # Página inicial com navegação
│   │   ├── home-page.css          # Estilos da página inicial
│   │   ├── table-1.tsx            # Tabela 1 - DataGrid básico
│   │   ├── table-1.css            # Estilos da Tabela 1
│   │   ├── table-2.tsx            # Tabela 2 - Recursos avançados (placeholder)
│   │   ├── table-3.tsx            # Tabela 3 - Customizações (placeholder)
│   │   └── table-placeholder.css  # Estilos para placeholders
│   ├── App.tsx                    # Componente principal
│   ├── App.css                    # Estilos globais
│   └── main.tsx                   # Ponto de entrada
├── mock-sample.json               # Dados de exemplo
├── Docs/                          # Documentação
└── package.json                   # Dependências e scripts
```

## Funcionalidades Implementadas

### Página Inicial
- Design moderno com gradientes e animações
- 3 botões de navegação para diferentes tabelas
- Layout responsivo
- Efeitos hover e transições suaves

### Tabela 1 - DataGrid Básico
- **Paginação** com opções de tamanho de página
- **Busca global** em todos os campos
- **Filtros por coluna** (HeaderFilter e FilterRow)
- **Ordenação múltipla** por colunas
- **Seleção múltipla** com checkboxes
- **Exportação** para Excel/CSV
- **Formatação personalizada** para moeda e data
- **Status badges** customizados
- **Design responsivo** para dispositivos móveis

### Dados de Exemplo
O arquivo `mock-sample.json` contém 10 registros de funcionários com os seguintes campos:
- ID, Nome, E-mail, Idade
- Cargo, Salário, Departamento
- Data de Admissão, Status (Ativo/Inativo)

## Padrões de Código

### Convenções de Nomenclatura
- **camelCase** para variáveis e funções
- **PascalCase** para classes e componentes
- **UPPERCASE** para constantes
- **kebab-case** para nomes de arquivos

### Estrutura de Código
- Indentação de 4 espaços
- Aspas duplas para strings
- Ponto e vírgula obrigatório
- Comentários JSDoc para funções públicas
- Máximo de 120 caracteres por linha

### Imports
1. Bibliotecas externas primeiro
2. Módulos internos depois
3. Arquivos CSS por último

## Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## Próximos Passos

### Tabela 2 - Recursos Avançados
- [ ] Agrupamento de dados
- [ ] Totalizadores e resumos
- [ ] Edição inline
- [ ] Validação de dados
- [ ] Filtros customizados
- [ ] Colunas virtuais

### Tabela 3 - Customizações
- [ ] Temas customizados
- [ ] Células personalizadas
- [ ] Componentes customizados
- [ ] Animações e transições
- [ ] Layouts responsivos avançados
- [ ] Integração com gráficos

## Contribuição

Este projeto segue as melhores práticas de desenvolvimento:
- Conventional Commits para mensagens de commit
- Proteção da branch main
- Review obrigatório em pull requests
- Versionamento semântico
- Testes unitários (a implementar)

## Licença

Este projeto é open source e está disponível sob a licença especificada no arquivo LICENSE.