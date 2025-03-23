function checkAnswers() {
    const answers = {
        q1: "B",
        q2: "A",
        q3: "B",
        q4: "B"
    };

    let score = 0;

    for (let question in answers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    alert(`You scored ${score}/4!`);
}
