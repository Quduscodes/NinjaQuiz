
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

const correctAnswers = ['B', 'B', 'B', 'B'];



form.addEventListener('submit', event => {
    event.preventDefault();
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    let score = 0;

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = output + '%';
        output == score ? clearInterval(timer) : output++;
    }, 10);
});



