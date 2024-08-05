document.querySelectorAll("input").forEach(function(e){var t=e.name.replace(/(?=[A-Z])/," "),a=document.createElement("label"),l=e.parentElement;e.placeholder=e.name[0].toUpperCase()+t.slice(1),a.className="field-label",a.textContent=e.name,a.setAttribute("for",e.id),l.append(a)});
//# sourceMappingURL=index.1a6b57d4.js.map
