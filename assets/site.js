// Copy buttons for code blocks and prompts. No other behaviour; the pages work without this file.
(function () {
  function addCopy(el, getText) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy";
    btn.textContent = "복사";
    btn.addEventListener("click", function () {
      var text = getText();
      function done(label) {
        btn.textContent = label;
        setTimeout(function () { btn.textContent = "복사"; }, 1500);
      }
      function fallback() {
        var range = document.createRange();
        range.selectNodeContents(el.querySelector("code") || el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        done("선택됨 — Ctrl+C");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done("복사됨"); }, fallback);
      } else {
        fallback();
      }
    });
    el.appendChild(btn);
  }
  document.querySelectorAll("pre").forEach(function (pre) {
    addCopy(pre, function () {
      var code = pre.querySelector("code");
      return (code ? code.textContent : pre.textContent).replace(/\n$/, "");
    });
  });
  document.querySelectorAll(".prompt").forEach(function (box) {
    addCopy(box, function () {
      return Array.prototype.map.call(box.querySelectorAll("p"), function (p) { return p.textContent; }).join("\n");
    });
  });
})();
