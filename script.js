function previewLetter() {
    const letterContent = document.getElementById('letterContent').value;
    const letterPreview = document.getElementById('letterPreview');
    letterPreview.innerText = letterContent;
}
