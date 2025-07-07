// Cro Mode (QA Test cookie)
(function() {
    // Utility Functions
    function setCookie(name, value, options = {}) {
        let {
            duration,
            domain,
            sameSite = 'Lax'
        } = options;
        domain = domain || window.location.hostname.split('.').slice(-2).join('.');
        let expires = '';
        if (duration) {
            let date = new Date();
            date.setTime(date.getTime() + (duration * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value}; Path=/; Domain=${domain}; SameSite=${sameSite}${expires}`;
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    // Extract QA mode logic
    function enableQAMode(mode) {
        if (mode === 'qa') {
            console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, {
                duration: 1
            });
        } else {
            // console.log('CRO Mode disabled');
            setCookie('cro_mode', '', {
                duration: -1
            });
        }
    }
    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
        if (mode === 'qa') {
            enableQAMode(mode);
            // console.log("QA Mode Active");
            // Place any QA mode specific logic here
        } else {
            enableQAMode('');
        }
    }
    initCROMode();
})();