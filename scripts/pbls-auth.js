/**
 * PebblousAuth — Shared authentication module for IR Press Room
 *
 * Master password unlocks all protected pages for the browser session.
 * Individual page passwords continue to work independently.
 */
window.PebblousAuth = (function() {
    'use strict';

    const MASTER_PASSWORD = 'pblsPressRoom2026!';
    const MASTER_SESSION_KEY = 'pbls_pressroom_auth';

    function hasMasterAccess() {
        return sessionStorage.getItem(MASTER_SESSION_KEY) === 'true';
    }

    function grantMasterAccess() {
        sessionStorage.setItem(MASTER_SESSION_KEY, 'true');
    }

    function logAttempt(pageName, success, authMethod) {
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'password_attempt',
                'page_name': pageName,
                'attempt_result': success ? 'success' : 'failure',
                'auth_method': authMethod,
                'attempt_time': new Date().toISOString(),
                'referrer': document.referrer || 'direct',
                'page_url': window.location.href
            });
        }
    }

    function unlock() {
        document.body.classList.remove('content-locked');
        var overlay = document.getElementById('password-overlay');
        if (overlay) overlay.classList.add('hidden');
    }

    /**
     * Initialize page-level password protection.
     * Checks master key first; if not set, falls back to page-specific password.
     * Accepts both master password and page-specific password.
     */
    function initPageProtection(config) {
        var password = config.password;
        var sessionKey = config.sessionKey;
        var pageName = config.pageName || '';

        // Already authenticated via master key
        if (hasMasterAccess()) {
            logAttempt(pageName, true, 'master_password');
            unlock();
            return;
        }

        // Already authenticated via page-specific key
        if (sessionStorage.getItem(sessionKey) === 'true') {
            logAttempt(pageName, true, 'page_password');
            unlock();
            return;
        }

        // Not authenticated — wire up password form
        document.addEventListener('DOMContentLoaded', function() {
            var input = document.getElementById('password-input');
            if (input) input.focus();
        });

        var form = document.getElementById('password-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var input = document.getElementById('password-input');
                var errorMsg = document.getElementById('password-error');
                var value = input.value;

                if (value === MASTER_PASSWORD) {
                    // Master password entered on a page
                    grantMasterAccess();
                    sessionStorage.setItem(sessionKey, 'true');
                    logAttempt(pageName, true, 'master_password');
                    unlock();
                } else if (value === password) {
                    // Page-specific password
                    sessionStorage.setItem(sessionKey, 'true');
                    logAttempt(pageName, true, 'page_password');
                    unlock();
                } else {
                    // Wrong password
                    logAttempt(pageName, false, 'page_password');
                    input.classList.add('error');
                    errorMsg.classList.add('show');
                    setTimeout(function() { input.classList.remove('error'); }, 500);
                    input.value = '';
                    input.focus();
                }
            });
        }
    }

    /**
     * Initialize Press Room page authentication.
     * Only accepts the master password.
     */
    function initPressRoom() {
        // Already authenticated
        if (hasMasterAccess()) {
            logAttempt('IR Press Room', true, 'pressroom_master');
            unlock();
            return;
        }

        document.addEventListener('DOMContentLoaded', function() {
            var input = document.getElementById('password-input');
            if (input) input.focus();
        });

        var form = document.getElementById('password-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var input = document.getElementById('password-input');
                var errorMsg = document.getElementById('password-error');

                if (input.value === MASTER_PASSWORD) {
                    grantMasterAccess();
                    logAttempt('IR Press Room', true, 'pressroom_master');
                    unlock();
                } else {
                    logAttempt('IR Press Room', false, 'pressroom_master');
                    input.classList.add('error');
                    errorMsg.classList.add('show');
                    setTimeout(function() { input.classList.remove('error'); }, 500);
                    input.value = '';
                    input.focus();
                }
            });
        }
    }

    return {
        hasMasterAccess: hasMasterAccess,
        grantMasterAccess: grantMasterAccess,
        initPageProtection: initPageProtection,
        initPressRoom: initPressRoom
    };
})();
