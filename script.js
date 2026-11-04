(function(){
(function(){
  var form=document.getElementById("contact-form"), note=document.getElementById("contact-note");
  if(!form) return;
  form.addEventListener("submit",function(event){
    event.preventDefault();
    if(!form.reportValidity()) return;
    var data=new FormData(form);
    var subject="Contacto desde la landing de Ramón";
    var body="Nombre: "+data.get("name")+"\nCorreo: "+data.get("email")+"\n\nMensaje:\n"+data.get("message");
    note.textContent="Abriendo tu programa de correo con el mensaje preparado…";
    window.location.href="mailto:juanerylu2@hotmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  });
})();
  var root=document.documentElement, btn=document.getElementById("theme");
  try{var saved=localStorage.getItem("theme"); if(saved==="light"||saved==="dark"){root.setAttribute("data-theme",saved);}}catch(e){}
  function current(){
    var t=root.getAttribute("data-theme");
    if(t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  }
  btn.addEventListener("click",function(){
    var next=current()==="dark"?"light":"dark";
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("theme",next);}catch(e){}
  });
})();
(function(){
  try{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var h=document.querySelector("h1"); if(!h) return;
    var text=h.textContent.trim();
    h.setAttribute("aria-label",text);
    h.textContent="";
    h.classList.add("typing");
    var typed=document.createElement("span"), cur=document.createElement("span"), rest=document.createElement("span");
    typed.setAttribute("aria-hidden","true"); cur.setAttribute("aria-hidden","true"); rest.setAttribute("aria-hidden","true");
    cur.className="cur"; rest.className="t-rest"; rest.textContent=text;
    h.appendChild(typed); h.appendChild(cur); h.appendChild(rest);
    var role=document.querySelector(".role"), rText="", rTyped, rCur, rRest;
    if(role){
      rText=role.textContent.trim(); role.textContent="";
      rTyped=document.createElement("span"); rCur=document.createElement("span"); rRest=document.createElement("span");
      rCur.className="cur"; rCur.style.visibility="hidden"; rRest.className="t-rest"; rRest.textContent=rText;
      role.appendChild(rTyped); role.appendChild(rCur); role.appendChild(rRest);
    }
    function typeRole(){
      if(!role) return;
      var j=0;
      function rstep(){
        j++;
        rTyped.textContent=rText.slice(0,j);
        rRest.textContent=rText.slice(j);
        if(j<rText.length){ setTimeout(rstep,40+Math.random()*40); } else { rCur.classList.add("done"); }
      }
      setTimeout(function(){ rCur.style.visibility="visible"; rstep(); },350);
    }
    var i=0;
    function step(){
      i++;
      typed.textContent=text.slice(0,i);
      rest.textContent=text.slice(i);
      if(i<text.length){
        var c=text.charAt(i-1);
        setTimeout(step,(c===" "?120:55)+Math.random()*60);
      } else { cur.remove(); typeRole(); }
    }
    setTimeout(step,450);
  }catch(e){}
})();
