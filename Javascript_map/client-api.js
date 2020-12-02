//https://jsonbox.io/box_19a0f46f4abff53ace46
// de constanten die je dynamisch wil gebruiken.
methodUrl = "https://jsonbox.io/box_";
apiKeyFree = "19a0f46f4abff53ace46";
// Ik werk met een api.
const getDataFromApi = async () => {
  // je kijgt bij deze url een lege array terug [], ook in de browser en in Postman.
  //url = "https://jsonbox.io/box_19a0f46f4abff53ace46";  
  let limit = '?limit=5';
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
//alert("hier doet ie het nog");

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
  addListToDom();
};
//0: {_id: "5fc408a225197400172ab1b7", description: "blah", done: "false", _createdOn: "2020-11-29T20:46:26.219Z"}


/* (20)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }]
0: { _id: "5fc6405d90cd9a0017b927e7", description: "hello", done: "false", _createdOn: "2020-12-01T13:08:45.143Z" }
1: { _id: "5fc63e7390cd9a0017b92795", description: "hello", done: "false", _createdOn: "2020-12-01T13:00:35.301Z" }
2: { _id: "5fc50bf8931e840017616d7d", description: "blah", done: "false", _createdOn: "2020-11-30T15:12:56.555Z" }
3: { _id: "5fc50bf6931e840017616d7c", description: "blah", done: "false", _createdOn: "2020-11-30T15:12:54.169Z" }
4: { _id: "5fc50bf2931e840017616d7b", description: "blah", done: "false", _createdOn: "2020-11-30T15:12:50.651Z" }
5: { _id: "5fc50be3931e840017616d7a", description: "do laundry", done: "false", _createdOn: "2020-11-30T15:12:35.
 */