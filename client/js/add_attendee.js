// const baseURL = 'https://conference-talk-api.herokuapp.com/';
const baseURL = 'http://localhost:2500';

const addAttendee = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const firstname = document.querySelector('#fname').value.trim();
  const lastname = document.querySelector('#lname').value.trim();

//   const errors = document.querySelectorAll('.error-message');
//   console.log('err', errors);

  try {
    const result = await fetch(`${baseURL}/attendees`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        firstname,
        lastname
      })
    });

    const jsonRes = await result.json();
    console.log('login', jsonRes);

    if (jsonRes.status === 409) {
      if (jsonRes.error.email) {
        errors[0].textContent = jsonRes.error.email;
      }
    }


    
    if (jsonRes.status === 201) {
      const success = document.querySelector('.success');
      success.innerHTML = 'Registration was successful';
    }
  } catch (error) {
    console.error(error);
  }
};
const errors = document.querySelectorAll('.error-message');
// eslint-disable-next-line require-jsdoc


document.querySelector('#form').addEventListener('submit', addAttendee);

