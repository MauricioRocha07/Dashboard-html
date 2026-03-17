export function initProjects() {
    // Selecionamos os elementos
    const titleInput = document.getElementById("new-project-title");
    const addBtn = document.getElementById("add-project-btn");
    const activeContainer = document.getElementById("active-projects-container");
    const trashContainer = document.getElementById("trash-projects-container");
    const viewTrashBtn = document.getElementById("view-trash-btn");

    if (!titleInput) return; // Trava de segurança

    // O "Banco de Dados" local
    let projectsData = JSON.parse(localStorage.getItem("dashboard_projects_v2")) || [];

    //Função para salvar no navegador e atualizar tela
    function saveAndRender() {
        localStorage.setItem("dashboard_projects_v2", JSON.stringify(projectsData));
        render();
    }

    // Função Render
    function render() {
        // Limpa os containers
        activeContainer.innerHTML = "";
        trashContainer.innerHTML = '<h3 style="color: #ff4d4d; margin-bottom: 15px;">Projetos Excluídos</h3>';

        projectsData.forEach((project, index) => {
            const card = document.createElement("div");
            card.className = "project-card card";

            if (!project.isTrashed) {
                // Se o projeto está ativo (false)
                card.innerHTML = `
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <button class="delete-project-btn" data-index="${index}" title="Mover para Lixeira">🗑️</button>
                </div>
                <p style="color: #666, font-size: 14px; margin-top: 10px;">(Adição dinâmica em breve...)</p>    
                `;
                activeContainer.appendChild(card);
            } else {
                // Se o projeto está na lixeira (true)
                card.innerHTML = `
                    <div class="project-header" style="opacity: 0.6;">
                        <h3 style="text-decoration: line-through;">${project.title}</h3>
                        <div style="display": flex; gap: 8px;>
                            <button class="restore-btn dashboard-btn" data-index="${index}" >♻️ Restaurar</button>
                            <button class="hard-delete-btn dashboard-btn" data-index="${index}">❌ Apagar</button>
                        </div>
                    </div>        
                `;
                trashContainer.appendChild(card);
            }
        });

        // Conectando os botões de ação

        // Botão de enviar para lixeira
        document.querySelectorAll(".delete-project-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.currentTarget.getAttribute("data-index");
                projectsData[idx].isTrashed = true; // Aplica o Soft Delete
                saveAndRender();
            });
        });

        // Botão de restaurar
        document.querySelectorAll(".restore-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.currentTarget.getAttribute("data-index");
                projectsData[idx].isTrashed = false; // Desfaz o Soft Delete
                saveAndRender();
            });
        });

        // Botão apagar definidamente
        document.querySelectorAll(".hard-delete-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                // Dispara o alerta no nacegador
                const confirmation = confirm("⚠️ CUIDADO: Tem certeza que deseja apagr este projeto permanentemente? Essa ação não pode ser desfeita.");

                // Usuario apertou em "OK"
                if (confirmation) {
                    const idx = e.currentTarget.getAttribute("data-index");
                    projectsData.splice(idx, 1); // Remove do Array for ever
                    saveAndRender();
                }
                
            });
        });
    }

    // Função para criar novo projeto
    addBtn.addEventListener("click", () => {
        const title = titleInput.value.trim();
        if (title !== "") {
            projectsData.push({
                title: title,
                isTrashed: false, // Nasce fora da lixeira
                tasks: []
            });
            titleInput.value = ""; // Limpa o campo
            saveAndRender();
        }
    });

    // Botão Mostra/Esconde lixeira
    viewTrashBtn.addEventListener("click", () => {
        if (trashContainer.style.display === "none") {
            trashContainer.style.display = "block";
            viewTrashBtn.textContent = "🙈 Esconder Lixeira";
        } else {
            trashContainer.style.display = "none";
            viewTrashBtn.textContent = "🗑️ Lixeira";
        }
    });

    // Roda ao carregar a página
    render();
}
