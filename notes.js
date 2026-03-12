export function initNotes() {
    const notepadArea = document.getElementById("notepad-area");
    const saveNotesBtn = document.getElementById("save-notes-btn");

    if (!notepadArea || !saveNotesBtn) return; // Trava de segurança

    function loadNotes() {
        const savedText = localStorage.getItem("dashboard_notes");
        if (savedText) notepadArea.value = savedText;
    }

    function saveNotes() {
        localStorage.setItem("dashboard_notes", notepadArea.value);
        alert("Notas salvas com sucesso!"); // Feedback visual
    }

    saveNotesBtn.addEventListener("click", saveNotes);
    loadNotes();
}
