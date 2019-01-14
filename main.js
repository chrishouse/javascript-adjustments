const inputs = document.querySelectorAll('.panel input');

function handleUpdates() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdates));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));