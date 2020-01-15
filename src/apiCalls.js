export const startConversation = async feeling => {
  const url = 'https://drwatson-api.herokuapp.com/api/v1/start_session'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ feeling })
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Dr Watson is currently down.  Please try again later.')
  }

  const data = await response.json();
  console.log(data)
  return data;
}

export const postMessage = (newMessage) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newMessage),
    headers: {
      'Content-Type': 'application/json'  
    }
  }
  
  return fetch('https://drwatson-api.herokuapp.com/api/message', options)
          .then(res => {
            if(!res.ok) {
              throw Error('Something is not right, try again later')
            }
            return res.json()})
}

export const endConversation = async () => {
  const url = 'https://drwatson-api.herokuapp.com/api/v1/end_session';

  const response = await fetch(url);
  if (!response.ok) {
    throw Error('There was a problem ending the session.  Please close the application.')
  }
}