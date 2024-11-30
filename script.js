document.getElementById("submit-btn").addEventListener("click", function () {
    const answers = Array.from(document.querySelectorAll("input[type='radio']:checked")).map(input => input.value);
    if (answers.length < 3) {
        alert("Пожалуйста, ответьте на все вопросы!");
        return;
    }

    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => counts[answer]++);

    const maxAnswer = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));

    const companies = {
        A: { name: "Газпром", description: "Лидер, который привык работать на глобальном уровне." },
        B: { name: "Роснефть", description: "Амбициозный и надежный игрок, ведущий за собой других." },
        C: { name: "Сбербанк", description: "Системный лидер, помогающий другим расти." },
        D: { name: "Яндекс", description: "Творческий новатор, который всегда стремится к лучшему." }
    };

    const result = companies[maxAnswer];
    document.getElementById("company-name").textContent = result.name;
    document.getElementById("company-description").textContent = result.description;

    document.getElementById("result").classList.remove("hidden");
});

