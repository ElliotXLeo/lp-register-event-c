'use strict';
const button = document.getElementById('button');
const terms = document.getElementById('terms');

const acceptTerms = () => {
  if (terms.value === 'agree') {
    terms.value = '';
  } else {
    terms.value = 'agree';
  }
}

const callApi = (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const nameSurname = form['nameSurname'].value;
  const telephone = form['telephone'].value;
  const email = form['email'].value;
  const company = form['company'].value;
  const date = form['date'].value;

  if (terms.value === 'agree') {
    if (nameSurname !== '' && telephone !== '' && email !== '' && company !== '' && date !== '') {
      console.log(`Enviando información a servidor: ${nameSurname}, ${telephone}, ${email}, ${company}, ${date}`);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Registrado!',
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        }
      });

      form['nameSurname'].value = '';
      form['telephone'].value = '';
      form['email'].value = '';
      form['company'].value = '';
      form['date'].value = '';

    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: '¡Todos los campos son obligatorios!',
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        }
      });
    }
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '¡Debe aceptar los términos y condiciones!',
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
      }
    });
  }
}

button.addEventListener('click', callApi);
terms.addEventListener('click', acceptTerms);