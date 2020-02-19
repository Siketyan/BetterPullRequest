function listener(event) {
    if (!event.currentTarget.innerText.includes('Draft')) {
        const result = confirm(
            chrome.i18n.getMessage('confirm_create_without_draft')
        );

        if (result !== true) {
            event.preventDefault();
        }
    }
}

function hook(button) {
    if (!button) {
        return;
    }

    button.removeEventListener('click', listener);
    button.addEventListener('click', listener);
}

hook(
    document.getElementsByClassName('js-pull-request-button')[0]
);
