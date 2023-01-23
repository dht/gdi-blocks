export function switchToFullscreen() {
    if (typeof window === 'undefined') {
        return;
    }

    const elem = window.document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
}

export function closeFullscreen() {
    if (typeof window === 'undefined') {
        return;
    }

    if (window.document.exitFullscreen) {
        window.document.exitFullscreen();
    }
}
