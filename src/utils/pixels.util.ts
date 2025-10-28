export const injectMetaPixel = () => {
  if (window.fbq) return;

  // Injeta o script
  !(function (f: any, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/pt_BR/fbevents.js");
};

export const waitForFbq = (timeout = 5000): Promise<void> =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      if (typeof window.fbq === "function" && window.fbq.loaded === true) {
        resolve();
      } else if (Date.now() - start > timeout) {
        reject(new Error("Facebook Pixel não carregou a tempo."));
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
