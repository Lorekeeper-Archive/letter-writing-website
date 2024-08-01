function customizePaper() {
    const letter = document.querySelector('.letter');
    const papers = ['url("assets/vintage_paper.jpg")', 'url("assets/old_paper.jpg")'];
    const currentBackground = letter.style.backgroundImage;
    const nextBackground = papers[(papers.indexOf(currentBackground) + 1) % papers.length];
    letter.style.backgroundImage = nextBackground;
}

function chooseFont() {
    const letterContent = document.getElementById('letterContent');
    const fonts = ['"Times New Roman", Times, serif', '"Courier New", Courier, monospace'];
    const currentFont = letterContent.style.fontFamily;
    const nextFont = fonts[(fonts.indexOf(currentFont) + 1) % fonts.length];
    letterContent.style.fontFamily = nextFont;
}

function addSeal() {
    const letter = document.querySelector('.letter');
    const existingSeal = document.querySelector('.seal');
    if (!existingSeal) {
        const seal = document.createElement('div');
        seal.className = 'seal';
        seal.style.backgroundImage = 'url("assets/seal.png")';
        letter.appendChild(seal);
    }
}

function previewLetter() {
    const letterContent = document.getElementById('letterContent').value;
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = letterContent.replace(/\n/g, '<br>');
    document.getElementById('previewModal').style.display = "block";
}

function closeModal() {
    document.getElementById('previewModal').style.display = "none";
}

function sendLetter() {
    const letterContent = document.getElementById('letterContent').value;
    alert('Letter Sent:\n' + letterContent);
}

function attachImage() {
    const letter = document.querySelector('.letter');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.position = 'absolute';
            img.style.top = '10px';
            img.style.right = '10px';
            img.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            letter.appendChild(img);
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function chooseContainer() {
    // Placeholder for container selection
    alert('Choose Container: Bottle or Envelope');
}
