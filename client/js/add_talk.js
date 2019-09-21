 const baseURL = 'https://conference-talk-api.herokuapp.com';
//const baseURL = 'http://localhost:2500';

const addTalk = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const abstract = document.querySelector('#abstract').value.trim();
  const fname = document.querySelector('#fname').value.trim();
  const lname = document.querySelector('#lname').value.trim();
  const email = document.querySelector('#email').value.trim();
  const company = document.querySelector('#company').value.trim();
  const bio = document.querySelector('#bio').value.trim();

//   const errors = document.querySelectorAll('.error-message');
//   console.log('err', errors);

  try {
    const result = await fetch(`${baseURL}/talks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        abstract,
        fname,
        lname,
        email,
        company,
        bio
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


document.querySelector('#form').addEventListener('submit', addTalk);

