# 📊 Dashboard Pessoal

Um painel interativo e modular desenvolvido em Vanilla JavaScript para gerenciar rotinas diárias. O projeto foca em produtividade, oferecendo ferramentas essenciais em uma única tela, com uma arquitetura de código limpa e escalável.

## 🚀 Funcionalidades

* **🏠 Home (Visão Geral):** Widgets interativos com Relógio Digital e previsão do clima.
* **🌤️ Clima Dinâmico:** Integração com a Open-Meteo API e Geolocalização do navegador.
* **📈 Painel Financeiro:** Cotações do Dólar, Euro e Bitcoin em tempo real (AwesomeAPI).
* **🎯 Gestão de Projetos (CRUD):** * Criação e acompanhamento de projetos com persistência de dados no `localStorage`.
  * **Lixeira (Soft Delete):** Sistema seguro de exclusão lógica, permitindo a restauração de projetos apagados acidentalmente.
  * **Hard Delete:** Exclusão definitiva com validação de segurança (alerta do navegador) para evitar perda de dados críticos.
* **✅ Gerenciador de Tarefas:** Adição e conclusão de tarefas com persistência (`localStorage`).
* **📝 Bloco de Notas:** Área de rascunho com salvamento automático.
* **🌙 Dark Mode:** Alternância entre tema claro e escuro.

## 🛠️ Tecnologias Utilizadas

* **HTML5 & CSS3:** Flexbox, UI estilo "Cards" e responsividade.
* **JavaScript (Vanilla):** ES6 Modules, manipulação de DOM, APIs Assíncronas (`fetch`, `async/await`) e Web Storage.