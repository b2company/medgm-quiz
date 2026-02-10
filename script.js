// Meta Pixel tracking
function trackEvent(eventName) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName);
    }
}

// Save answer to localStorage
function saveAnswer(step, answer) {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers[step] = answer;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
}

// Get answer from localStorage
function getAnswer(step) {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    return answers[step];
}

// Navigate to next step
function goToStep(stepNumber) {
    window.location.href = `step${stepNumber}.html`;
}

// Navigate back
function goBack() {
    window.history.back();
}

// Handle option selection
function selectOption(step, answer, nextStep) {
    saveAnswer(step, answer);
    trackEvent('QuizStepCompleted');

    if (nextStep) {
        goToStep(nextStep);
    }
}

// Handle input with continue button
function setupInputStep(step, nextStep) {
    const input = document.getElementById('answer-input');
    const button = document.getElementById('continue-btn');

    // Load saved answer
    const savedAnswer = getAnswer(step);
    if (savedAnswer) {
        input.value = savedAnswer;
        button.disabled = false;
    }

    // Enable button when input has value
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            button.disabled = false;
            saveAnswer(step, this.value);
        } else {
            button.disabled = true;
        }
    });

    // Handle continue
    button.addEventListener('click', function() {
        if (input.value.trim()) {
            trackEvent('QuizStepCompleted');
            goToStep(nextStep);
        }
    });

    // Allow enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            button.click();
        }
    });
}

// Initialize back button
function setupBackButton() {
    const backBtn = document.querySelector('.back-button');
    if (backBtn) {
        backBtn.addEventListener('click', goBack);
    }
}

// Track page view
window.addEventListener('DOMContentLoaded', function() {
    trackEvent('PageView');
    setupBackButton();
});
