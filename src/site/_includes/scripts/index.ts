const elemCopyButtons = document.querySelectorAll('.feed-url-copy-button');

elemCopyButtons.forEach((elemCopyButton) => {
  elemCopyButton.addEventListener('click', () => {
    const elemInput = elemCopyButton.parentElement?.querySelector('input');
    if (!elemInput) {
      throw new Error('요소를 찾을 수 없습니다.');
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(elemInput.value);
    } else {
      elemInput.select();
      document.execCommand('copy');
    }

    elemCopyButton.classList.add('active');

    elemCopyButton.innerHTML = '카피 했습니다!';
    window.setTimeout(() => {
      elemCopyButton.innerHTML = '카피';
      elemCopyButton.classList.remove('active');
    }, 1000);
  });
});
