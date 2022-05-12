// JAVASCRIPT DU QUIZZ //

document.addEventListener("DOMContentLoaded", function () 
{
    //On crée une classe Question
    class Question
    {
        //On ajoute un constructeur avec nos trois paramètre 
        constructor(text, choices, answer)
        {
            // à l'intérieur on met notre text / les choix que l'utilisateur peut faire / et les réponses
            this.text = text;
            this.choices = choices;
            this.answer = answer;
        }
        //On crée une fonction pour affichez la bonne réponse
        isCorrectAnswer(choice)
        {
            return this.answer === choice;
        }
    }
    // On crée un tableau avec nos quatre question
    let questions =
    [
        new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau ?",
                    ["indexOf()", "map()", "filter()", "reduce()"],
                    "filter()"),
        new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau ?",
                    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
                    "includes()"),
        new Question("Quelle méthode transforme du JSON en un objet Javascript ?"
                    ,["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS()"],
                    "JSON.parse()"),
        new Question("Quelle méthode Javascript permet d'arrondir à l'entier le plus proche ?",
                    ["Math.ceil()", "Math.floor()", "Math.random()", "Math.round()"],
                    "Math.round()"),
    ];
    console.log(questions);
    // on créé une classe Quizz
    class Quiz
    {
        // on ajoute le constructeur avec comme paramètre les questions
        constructor(questions)
        {
            // à l'intérieur on met le score du quizz/ les questions / et l'ordre des questions
            this.score = 0;
            this.questions = questions;
            this.currentQuestionIndex = 0;
        }
        // fonction qui permet d'afficher les question
        getCurrentQuestion()
        {
            return this.questions[this.currentQuestionIndex];
        }
        // fonction guess qui vérifira la réponse de l'utilisateur
        guess(answer)
        {
            if (this.getCurrentQuestion().isCorrectAnswer(answer))// si c'est true
            {
                this.score++;
            }
            this.currentQuestionIndex++;
        }
        // faire une classe quand les questions sont fini
        hasEnded()
        {
            return this.currentQuestionIndex >= this.questions.length;
        }
    }
    // regrouper toute les fonctions qui on un rapport avec l'affichage
    const display =
    {
        elementShown: function(id, text)
        {
            let element = document.getElementById(id);
            element.innerHTML = text;
        },// affichez une phrase avec le résultat //
        endQuiz: function()
        {
            let endQuizHTML =   
            `<h1>Quiz terminé !</h1>
            <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
            this.elementShown("quiz",endQuizHTML);
        },
        question: function () 
        {
            this.elementShown("question", quiz.getCurrentQuestion().text)    
        },
        choices: function()
        {
            let choices = quiz.getCurrentQuestion().choices;
            console.log(choices);
            // fonction permet de récupérer ou l'utilisateur à cliqué et récupéré sa valeur et la comparer avec la réponse
            guessHandler = (id, guess) =>
            {
                document.getElementById(id).onclick = function()
                {
                    quiz.guess(guess);
                    quizApp();
                }
            }
            for(let i = 0; i < choices.length; i++)
            {
                this.elementShown("choice" + i, choices[i]);
                guessHandler("guess"+ i, choices[i]);
            }
        },
        // faire apparaitre  en dessous du questionnaire ou en sont les questions
            progress: function()
            {
                let currentQuestionNumber = quiz.currentQuestionIndex + 1;
                this.elementShown("progress", "Question " + currentQuestionNumber + " sur "+ quiz.questions.length);
            },
    };
    // logique du jeux
    quizApp = () =>
    {
        if (quiz.hasEnded())// test si c'est vrai
        {
            display.endQuiz();//End
        }
        else
        {
            display.question();//question
            display.choices();//choix
            display.progress();//progrer
        }
    }

    // création d'un nouveau quiz
    let quiz = new Quiz(questions);
    quizApp();
    console.log(quiz)
});