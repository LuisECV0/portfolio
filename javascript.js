function toggleChat() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
}
function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;
    var chatMessages = document.getElementById("chat-messages");
    // Agrega el mensaje del usuario al chat
    chatMessages.innerHTML += '<div class="user-message">' + message + '</div>';
    // Lógica para buscar una respuesta en función de la pregunta
    var respuesta = obtenerRespuesta(message);
    // Muestra la respuesta en el chat
    chatMessages.innerHTML += '<div class="bot-message">' + respuesta + '</div>';
    // Limpia el cuadro de entrada
    userInput.value = "";
}

function obtenerRespuesta(pregunta) {
    // Implementa aquí la lógica para buscar respuestas en función de la pregunta.
    // Este es solo un ejemplo básico, debes crear una base de conocimiento más grande y una lógica de búsqueda real.
    if (pregunta.includes("Revolución Industrial")) {
        return "La Revolución Industrial fue un período de transformación económica y social en el siglo XIX...";
    } else if (pregunta.includes("Renacimiento y humanismo")) {
        return "El Renacimiento y el humanismo estaban estrechamente relacionados...";
    } else if(pregunta.includes("Re zero")) {
        return "es el besto anime isekai"
    }
    else {
        return "Lo siento, no tengo información sobre esa pregunta en este momento.";
    }
}
