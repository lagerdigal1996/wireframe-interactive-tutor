document.addEventListener('DOMContentLoaded', () => {
    // Placeholder functions to showcase interactivity
    loadTutorials();
    loadExamples();
});

function loadTutorials() {
    const tutorials = [
        { title: 'Getting Started with Wireframing', content: 'Step 1: Understand the basics.' },
        { title: 'Using Tools for Wireframing', content: 'Step 2: Explore different tools.' }
    ];
    const tutorialContainer = document.getElementById('tutorials-content');
    tutorials.forEach(tutorial => {
        const tutorialElement = document.createElement('div');
        tutorialElement.innerHTML = `<h3>${tutorial.title}</h3><p>${tutorial.content}</p>`;
        tutorialContainer.appendChild(tutorialElement);
    });
}

function loadExamples() {
    const examples = [
        { title: 'E-commerce Website Wireframe', description: 'A wireframe example for an online store.' },
        { title: 'Portfolio Website Wireframe', description: 'A wireframe example for a personal portfolio.' }
    ];
    const exampleContainer = document.getElementById('examples-content');
    examples.forEach(example => {
        const exampleElement = document.createElement('div');
        exampleElement.innerHTML = `<h3>${example.title}</h3><p>${example.description}</p>`;
        exampleContainer.appendChild(exampleElement);
    });
}