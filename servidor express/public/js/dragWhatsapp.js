let whatsapp = document.querySelector('#whatsapp')

    whatsapp.onmousedown = function(event) {

      let shiftX = event.clientX - whatsapp.getBoundingClientRect().left;
      let shiftY = event.clientY - whatsapp.getBoundingClientRect().top;

      whatsapp.classList.add("absolute");
      whatsapp.style.zIndex = 900;
      document.body.append(whatsapp);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        whatsapp.style.left = pageX - shiftX + 'px';
        whatsapp.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      whatsapp.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        whatsapp.onmouseup = null;
    };

    };

    whatsapp.ondragstart = function() {
      return false;
    }; 

