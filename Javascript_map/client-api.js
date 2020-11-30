//https://jsonbox.io/box_19a0f46f4abff53ace46
// de constanten die je dynamisch wil gebruiken.
methodUrl = "https://jsonbox.io/box_";
apiKeyFree = "19a0f46f4abff53ace46";
// Ik werk met een api.
const getDataFromApi = async () => {
  // je kijgt bij deze url een lege array terug [], ook in de browser en in Postman.
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46";
  apiTotaleUrl = (`${methodUrl}${apiKeyFree}`);
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
    //return await array;
    console.log(await array);
  }
  catch (error) {
    return "Catch" + error;
  }
};
//console.log(getDataFromApi())
getDataFromApi();


/* {
  "_id": "5fbfbc794ab6620017fe551e",
  "description": "do laundry",
  "done": "false",
  "_createdOn": "2020-11-26T14:32:25.694Z"
}
 */

//https://jsonbox.io/box_19a0f46f4abff53ace46
/* const data = { description: "do groceries", done: false };
fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});
 */

const postDataFromApi = async data => {
  const input = document.getElementById('inputField');

  // Via PostMan de eerste taken gepost, zoals in de opdracht vermeld staat.
  const message = {
    description: input.value,
    done: "false"
  }
  // je kijgt bij deze url een lege array terug [], ook in de browser en in Postman.
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46";
  apiTotaleUrl = (`${methodUrl}${apiKeyFree}`);
  const result = await fetch(apiTotaleUrl, {
    // options object=
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      // wanneer je in Postman de key bij de headers Accept noteert 
      //dan geeft postman zelf de verschillende values aan die je kan kiezen.
      'Content-type': 'application/json',
    }
  });
  const json = await result.json();
  console.log(json);
};

//postDataFromApi();





//To delete a specific record use HTTP DELETE with jsonbox.io/${BOX_ID}/${RECORD_ID}
const deleteDataFromApi = async data => {
  // je kijgt bij deze url een lege array terug [], ook in de browser en in Postman.
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46"/record_5fc408a225197400172ab1b7;
  const recordId = "/5fc408a225197400172ab1b7"
  apiTotaleUrl = (`${methodUrl}${apiKeyFree}${recordId}`);
  const result = await fetch(apiTotaleUrl, {
    // options object=
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      // wanneer je in Postman de key bij de headers Accept noteert 
      //dan geeft postman zelf de verschillende values aan die je kan kiezen.
      'Content-type': 'application/json',
    }
  });
  const json = await result.json();
  //await data;
  //console.log(json);
};
//0: {_id: "5fc408a225197400172ab1b7", description: "blah", done: "false", _createdOn: "2020-11-29T20:46:26.219Z"}

//deleteDataFromApi();



/* https://jsonbox.io/box_
19a0f46f4abff53ace46 */