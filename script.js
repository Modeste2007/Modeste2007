document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});
document.getElementById("settings-btn").addEventListener("click", toggleMenu);
document.getElementById("clear-chat-btn").addEventListener("click", clearChat);
document.getElementById("save-chat-btn").addEventListener("click", saveChat);
document.getElementById("dark-mode-btn").addEventListener("click", toggleDarkMode);
document.getElementById('add-faq-btn').addEventListener('click', toggleFaqForm);
document.getElementById('faq-form').addEventListener('submit', addFaq);

// Fonction pour envoyer un message
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("Vous", message, "user");
    userInput.value = "";

    fetch("/get_response", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage("Chatbot", data.response, "bot");
    })
    .catch(error => console.error("Erreur lors de la récupération de la réponse :", error));
}

// Fonction pour afficher un message
function appendMessage(sender, message, cssClass) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", cssClass);

    const bubbleElement = document.createElement("div");
    bubbleElement.classList.add("bubble");
    bubbleElement.textContent = message;

    messageElement.appendChild(bubbleElement);
    chatBox.appendChild(messageElement);

    // Scroll en bas du chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fonction pour basculer l'affichage du menu des paramètres
function toggleMenu() {
    const menu = document.getElementById("settings-menu");
    console.log('Toggle du menu');  // Ajoute cette ligne pour déboguer
    menu.classList.toggle("active");
}


// Fonction pour effacer le chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}

// Fonction pour sauvegarder le chat
function saveChat() {
    const chatBox = document.getElementById("chat-box");
    const chatContent = chatBox.innerText;
    const blob = new Blob([chatContent], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "conversation.txt";
    a.click();
}

// Fonction pour basculer le mode sombre/clair
function toggleDarkMode() {
    console.log('Changement de mode');
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}

// Fonction pour afficher/masquer le formulaire FAQ
function toggleFaqForm() {
    document.getElementById('faq-container').classList.toggle('hidden');
}

// Fonction pour ajouter une nouvelle question/réponse à la FAQ
function addFaq(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    
    fetch('faq.json')
        .then(response => response.json())
        .then(data => {
            data.push({ question, answer });

            fetch('faq.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                alert('FAQ mise à jour!');
            })
            .catch(err => console.error('Erreur lors de l\'ajout à la FAQ:', err));
        })
        .catch(err => console.error('Erreur lors du chargement des questions/réponses:', err));
}
