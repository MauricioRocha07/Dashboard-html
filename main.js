// Importando as funcionalidades isoladas
import { initClock } from "./clock.js";
import { initTasks } from "./tasks.js";
import { initNotes } from "./notes.js";

// Inicializando os módulos
initClock();
initTasks();
initNotes();

// Navegação das abas
const menuButtons = document.querySelectorAll('[data-section]');
const sections = document.querySelectorAll('.dashboard-section');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-section');

        // Remove a classe 'active' de todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' na seção clicada
        document.getElementById(targetId).classList.add('active');
    });
});

// Modo escuro
const toggleThemeBtn = document.getElementById("toggle-theme");

if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggleThemeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}
