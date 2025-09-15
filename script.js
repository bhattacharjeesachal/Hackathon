// Create floating code snippets
const codeSnippets = [
    'function hackathon()', '{ innovation: true }', 'console.log("Hello World")', 
    'if (coding) { win(); }', 'class Innovation {}', 'import success from "hardwork"',
    'const team = new Team(6)', 'while(true) { code(); }', 'return victory;',
    'git commit -m "winning"', 'npm install creativity', 'sudo make me coffee'
];

function createFloatingCode() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    setInterval(() => {
        const codeElement = document.createElement('div');
        codeElement.className = 'floating-code';
        codeElement.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeElement.style.left = Math.random() * window.innerWidth + 'px';
        codeElement.style.animationDelay = Math.random() * 2 + 's';
        codeElement.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        bgAnimation.appendChild(codeElement);
        
        setTimeout(() => {
            if (codeElement.parentNode) {
                codeElement.parentNode.removeChild(codeElement);
            }
        }, 25000);
    }, 3000);
}

// Create floating particles
function createParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        bgAnimation.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 20000);
    }, 1500);
}

// Create tech elements
function createTechElements() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    setInterval(() => {
        const techElement = document.createElement('div');
        techElement.className = 'tech-element';
        techElement.style.left = Math.random() * window.innerWidth + 'px';
        techElement.style.animationDelay = Math.random() * 3 + 's';
        
        bgAnimation.appendChild(techElement);
        
        setTimeout(() => {
            if (techElement.parentNode) {
                techElement.parentNode.removeChild(techElement);
            }
        }, 8000);
    }, 2000);
}

// Initialize animations
function initializeAnimations() {
    createFloatingCode();
    createParticles();
    createTechElements();
}

// Add hover effects to rule items
function initializeHoverEffects() {
    document.querySelectorAll('.rule-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(0, 212, 255, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'rgba(0, 212, 255, 0.1)';
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeHoverEffects();
});

// Optional: Add loading effect
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});