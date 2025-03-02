import random

def get_response(user_message):
    user_message = user_message.lower()

    # Réponses basiques
    basic_responses = {
        "bonjour": "Bonjour ! Comment puis-je vous aider aujourd'hui ? 😊",
        "comment ça va": "Je vais très bien, merci ! Et vous ?",
        "au revoir": "Au revoir ! Passez une excellente journée !",
        "merci": "Avec plaisir ! Si vous avez d'autres questions, je suis là !",
        "qui es-tu": "Je suis un chatbot créé pour discuter avec vous et vous divertir !",
    }

    # Blagues
    jokes = [
        "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon, ils tombent dans le bateau ! 😂",
        "Que dit une imprimante à une autre ? 'Tu es déconnectée.' 🖨️",
        "Pourquoi les mathématiciens détestent-ils la forêt ? Parce qu'il y a trop de racines ! 🌳",
    ]

    # Citations inspirantes
    quotes = [
        "« Le seul moyen de faire du bon travail est d'aimer ce que vous faites. » – Steve Jobs",
        "« Croyez en vous-même et en tout ce que vous êtes. » – Christian Larson",
        "« Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. » – Albert Schweitzer",
    ]

    # Faits intéressants
    facts = [
        "Saviez-vous que le cœur d'une crevette est situé dans sa tête ? 🦐",
        "La lumière du soleil met environ 8 minutes pour atteindre la Terre. ☀️",
        "Les papillons goûtent avec leurs pieds ! 🦋",
    ]

    # Réponses éducatives
    educational_responses = {
        "qu'est-ce que la gravité": "La gravité est une force qui attire les objets vers le centre de la Terre (ou tout autre objet massif). C'est ce qui nous empêche de flotter ! 🌍",
        "qui a inventé l'ordinateur": "Le concept de l'ordinateur a été introduit par Charles Babbage au XIXe siècle. Alan Turing a également joué un rôle clé dans son développement moderne. 💻",
        "comment apprendre à coder": "Commencez par choisir un langage simple comme Python. Utilisez des ressources en ligne comme Codecademy, FreeCodeCamp ou des tutoriels YouTube. Et surtout, pratiquez ! 👨‍💻",
    }

    # Logique pour les réponses
    if user_message in basic_responses:
        return basic_responses[user_message]
    elif "blague" in user_message:
        return random.choice(jokes)
    elif "citation" in user_message:
        return random.choice(quotes)
    elif "fait intéressant" in user_message or "fun fact" in user_message:
        return random.choice(facts)
    elif user_message in educational_responses:
        return educational_responses[user_message]
    else:
        return "Je ne suis pas sûr de comprendre. Posez-moi une autre question ou demandez une blague, une citation ou un fait intéressant ! 😊"

