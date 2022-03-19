export function generateEventResetMain() {
    document.dispatchEvent(new CustomEvent('toModel', {
        detail: {
            from: 'controller',
            action: 'resetMain'
        }
    }));
}
;
export function generateEventChangeMain(target) {
    document.dispatchEvent(new CustomEvent('toModel', {
        detail: {
            from: 'controller',
            action: 'changeMain',
            details: {
                mainContent: `mainContent${target.replace(/[^0-9]/g, '')}`
            }
        }
    }));
}
;
export function generateEventActiveNavBttn(target) {
    document.dispatchEvent(new CustomEvent('toViewer', {
        detail: {
            from: 'controller',
            action: 'activeNavBttn',
            details: {
                target
            }
        }
    }));
}
;
export function addList(listener, toControllerEventName) {
    const { type, target, action } = listener;
    const elem = document.querySelector(target);
    if (elem) {
        elem.addEventListener(`${type}`, event => {
            document.dispatchEvent(new CustomEvent(`${toControllerEventName}`, { detail: {
                    from: 'app',
                    action,
                    details: {
                        target,
                    }
                } }));
        });
    }
}
;
export function generateEventSetLang(target) {
    const lang = target.slice(-2);
    document.dispatchEvent(new CustomEvent('toModel', {
        detail: {
            from: 'controller',
            action: 'setLang',
            details: {
                lang
            }
        }
    }));
}
;
