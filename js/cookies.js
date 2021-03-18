function almacenaCookie(pTarea, pPrioridad) {
     if (document.cookie) {
         let cookie = document.cookie.split('; ');
         console.log(cookie)
         tarea = cookie[0];
         tipo = cookie[1].split('=');
        
        console.log('Ritmo de vida ' + tipo[1] + '');
    } else {
         let tarea = pTarea;  
         let tipo = pPrioridad;
         
         document.cookie = 'tarea ='+ tarea;
         document.cookie =  'prioridad ='+tipo;
     }
}
//Algunas cookies están haciendo mal uso del atributo “sameSite“ recomendado 2
//SameSite=None; Secure


