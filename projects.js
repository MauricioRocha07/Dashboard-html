export function initProjects() {
    // Pegamos todas as checkbox
    const checkboxes = document.querySelectorAll('.project-steps input[type="checkbox"]');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (!progressFill || !progressText) return; // Trava de segurança

    function updateProgress() {
        const total = checkboxes.length;
        // Contas quantas estão com o check
        const checked = document.querySelectorAll('.project-steps input[type="checkbox"]:checked').length;

        // Se o total for 0, não divide
        if (total === 0) return;

        // Calcula a porcentagem
        const percentage = Math.round((checked / total) * 100);

        // Atualiza texto e largura da barra
        progressText.textContent = `${percentage}% Concluído`;
        progressFill.style.width = `${percentage}%`;

        // Logica das cores
        if (percentage === 100) {
            progressFill.style.backgroundColor = "#4caf50";
        } else if (percentage >= 50) {
            progressFill.style.backgroundColor = "#ffc107";
        } else {
            progressFill.style.backgroundColor = "#ff4d4d";
        }
    }

    checkboxes.forEach(box => {
        box.addEventListener('change', updateProgress);
    });

    updateProgress();
}
