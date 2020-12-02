//https://jsonbox.io/box_19a0f46f4abff53ace46
// de constanten die je dynamisch wil gebruiken.
methodUrl = "https://jsonbox.io/box_";
apiKeyFree = "19a0f46f4abff53ace46";
// Ik werk met een api.
const getDataFromApi = async () => {
  // je kijgt bij deze url een lege array terug [], ook in de browser en in Postman.
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46";  
  let limit = '?limit=25';
  apiTotaleUrl = (`${methodUrl}${apiKeyFree}${limit}`);
  try {
    array = await fetch(apiTotaleUrl, {
      method: 'Get',
      headers: {
        // wanneer je in Postman de key bij de headers Accept noteert 
        //dan geeft postman zelf de verschillende values aan die je kan kiezen.
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
    //hier krijg ik een array met objecten terug.
    return await array;
    //console.log(await array);
  }
  catch (error) {
    return "Catch" + error;
  }
};
//console.log(getDataFromApi())
getDataFromApi();


const postDataFromApi = async () => {
  const inputField = document.getElementById('inputField');
  const input = inputField.value;
  // Via PostMan de eerste taken gepost, zoals in de opdracht vermeld staat.
  const message = {
    description: input,
    done: "false"
  }
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46";
  apiTotaleUrl = (`${methodUrl}${apiKeyFree}`);
  const result = await fetch(apiTotaleUrl, {
    // options object=
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      // wanneer je in Postman de key bij de headers Accept noteert 
      //dan geeft postman zelf de verschillende values aan die je kan kiezen.
      'Content-type': 'application/json',
    }
  });
  const json = await result.json();
  //console.log(json);
  return addListToDom(json);
};


//To delete a specific record use HTTP DELETE with jsonbox.io/${BOX_ID}/${RECORD_ID}
const deleteDataFromApi = async (x) => {
  //console.log(x);
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46/5fc408a225197400172ab1b7";
  recordId = (`/${x}`);
  apiTotaleUrl = (`${methodUrl}${apiKeyFree}${recordId}`);
  //alert(apiTotaleUrl);
  const result = await fetch(apiTotaleUrl, {
    // options object=
    method: 'DELETE',
    body: JSON.stringify(),
    headers: {
      // wanneer je in Postman de key bij de headers Accept noteert
      //dan geeft postman zelf de verschillende values aan die je kan kiezen.
      'Content-type': 'application/json',
    }
  });
  const json = await result.json();
  //await data;
  //console.log(json);
  alert("You are a level up! Well done!")
  addListToDom();
};
