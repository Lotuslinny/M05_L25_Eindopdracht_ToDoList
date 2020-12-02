const addListToDom = async () => {
  document.getElementById("ToDoList").innerHTML = "";
  const dataList = await getDataFromApi();
  console.log(array)
  //array.filter(element => element === (element.description.innerHTML = "{a-z] || [A-Z] || [0-9]"));

  array.forEach(element => {

    let listItem = document.createElement("li")
    let node = document.createTextNode(element.description);
    let img = document.createElement("img");
    img.id = element._id;
    img.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzE1IDMxNSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMxNSAzMTUiPgogIDxnPgogICAgPHBhdGggZD0ibTI1Ni43NzQsMjMuOTQyaC02NC44MzZ2LTYuNDY1YzAtOS42MzYtNy43NDQtMTcuNDc3LTE3LjI2My0xNy40NzdoLTM0LjM0OGMtOS41MjEsMC0xNy4yNjYsNy44NDEtMTcuMjY2LDE3LjQ3OHY2LjQ2NWgtNjQuODM1Yy05LjYxOSwwLTE3LjQ0NSw3Ljc2LTE3LjQ0NSwxNy4yOTd2MTEuNDI5YzAsNy4xNjggNC40MiwxMy4zMyAxMC42OTgsMTUuOTUxIDEuOTg5LDM5LjYyMyAxMy41LDIzMS4xOTMgMTQuMDE4LDIzOS44MDEgMC4yMjIsMy42OTYgMy4yODQsNi41OCA2Ljk4Nyw2LjU4aDE3MC4wMzNjMy43MDMsMCA2Ljc2Ni0yLjg4NCA2Ljk4Ny02LjU4IDAuNTE4LTguNjA3IDEyLjAyOC0yMDAuMTc4IDE0LjAxOC0yMzkuODAxIDYuMjc4LTIuNjIxIDEwLjY5OC04Ljc4MyAxMC42OTgtMTUuOTUxdi0xMS40M2M1LjY4NDM0ZS0xNC05LjUzNy03LjgyNi0xNy4yOTctMTcuNDQ2LTE3LjI5N3ptLTExOS43MTMtNi40NjRjMC0xLjkxOCAxLjQ2NS0zLjQ3OCAzLjI2Ni0zLjQ3OGgzNC4zNDhjMS44LDAgMy4yNjQsMS41NiAzLjI2NCwzLjQ3OHY2LjQ2NWgtNDAuODc3di02LjQ2NXptLTgyLjI4MiwyMy43NjFjMC0xLjgxOCAxLjU0Ni0zLjI5NyAzLjQ0NS0zLjI5N2gxOTguNTQ5YzEuODk5LDAgMy40NDUsMS40NzggMy40NDUsMy4yOTd2MTEuNDI5YzAsMS44MTktMS41NDYsMy4yOTktMy40NDUsMy4yOTloLTE5OC41NDhjLTEuODk5LDAtMy40NDUtMS40NzktMy40NDUtMy4yOTl2LTExLjQyOXptMTgxLjE0MywyNTkuNzYxaC0xNTYuODQ4Yy0yLjA1NS0zNC4yNDctMTEuNDc5LTE5MS42NzQtMTMuNTEtMjMxLjAzM2gxODMuODY3Yy0yLjAzMSwzOS4zNTktMTEuNDU0LDE5Ni43ODYtMTMuNTA5LDIzMS4wMzN6Ii8 + CiAgICA8cGF0aCBkPSJtMTU3LjUsOTUuMTI1Yy0zLjg2NiwwLTcsMy4xMzQtNyw3djE3Ni4xMDljMCwzLjg2NiAzLjEzNCw3IDcsNyAzLjg2NiwwIDctMy4xMzQgNy03di0xNzYuMTA5YzAtMy44NjYtMy4xMzQtNy03LTd6Ii8 + CiAgICA8cGF0aCBkPSJtMTEwLjIsMTAyLjA0Yy0wLjIwMi0zLjg2LTMuNTA3LTYuODM3LTcuMzU1LTYuNjI1LTMuODYsMC4yMDEtNi44MjcsMy40OTQtNi42MjUsNy4zNTVsOS4xODIsMTc1LjgyOWMwLjE5NSwzLjczNiAzLjI4NSw2LjYzNSA2Ljk4NCw2LjYzNSAwLjEyMywwIDAuMjQ3LTAuMDAzIDAuMzcxLTAuMDEgMy44Ni0wLjIwMSA2LjgyNy0zLjQ5NCA2LjYyNS03LjM1NWwtOS4xODItMTc1LjgyOXoiLz4KICAgIDxwYXRoIGQ9Im0yMTIuMTU1LDk1LjQxNWMtMy44OTktMC4yMjMtNy4xNTMsMi43NjQtNy4zNTUsNi42MjVsLTkuMTg0LDE3NS44MjljLTAuMjAyLDMuODYxIDIuNzY1LDcuMTU0IDYuNjI1LDcuMzU1IDAuMTI1LDAuMDA3IDAuMjQ4LDAuMDEgMC4zNzEsMC4wMSAzLjY5OCwwIDYuNzg5LTIuODk4IDYuOTg0LTYuNjM1bDkuMTg0LTE3NS44MjljMC4yMDItMy44NjEtMi43NjQtNy4xNTQtNi42MjUtNy4zNTV6Ii8+CiAgPC9nPgo8L3N2Zz4K"
    document.getElementById("ToDoList").appendChild(listItem);
    listItem.appendChild(node);
    listItem.appendChild(img);
    // meteen een console log is dus niet zo handig, hij moet netjes in een functie staan. Dan voert hij hem pas uit op de klik. 
    img.addEventListener("click", function () {
      deleteDataFromApi(img.id);

    });
  })
};
addListToDom();

/* Wanneer er een taak in het Inputveld wordt getypt en daarna op de addTask button wordt gedrukt,
 wordt de task gePOST en toegevoegd aan de lijst UL aan een Li.
 */
document.getElementById("buttonAddTask").addEventListener("click", postDataFromApi);

/* const hasAnArrayWithTasksNotDeleted = () => {
  if
}; */

