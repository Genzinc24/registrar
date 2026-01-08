
(function(){
  if(!window.ENABLE_AUTH){ return; }
  function ensureMsal(cb){ if(window.msal){ cb(); return; } const s = document.createElement('script'); s.src = 'https://alcdn.msauth.net/browser/2.37.0/js/msal-browser.min.js'; s.onload = cb; document.head.appendChild(s); }
  ensureMsal(()=>{ const msalConfig = window.MSAL_CONFIG; if(!msalConfig || !msalConfig.auth || !msalConfig.auth.clientId){ alert('MSAL config missing. Please set MSAL_CONFIG in assets/js/config.js'); return; } const msalInstance = new msal.PublicClientApplication(msalConfig); const loginRequest = { scopes: window.MSAL_SCOPES || ["User.Read"] }; msalInstance.handleRedirectPromise().then((authResult)=>{ if(authResult){ sessionStorage.setItem('authAccount', authResult.account.username); } const account = msalInstance.getAllAccounts()[0]; if(!account){ msalInstance.loginRedirect(loginRequest); } else { sessionStorage.setItem('authAccount', account.username); document.body.classList.add('authed'); } }).catch((e)=>{ console.error(e); alert('Authentication error: ' + e.message); }); });
})();
