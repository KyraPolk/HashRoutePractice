//console.log("hello world");//connected successfully


/** The first step is to grab the html element you want
 *  to manipulate using querySelector */
//we want to grab the button on our webpage and give it an action
// const button = document.querySelector(".getListButton");//connected button in html
// const dataHolderDiv = document.querySelector(".listItems")//connect to div
// //add event listener for the button
// button.addEventListener("click", async () => {
//   /*when the user clicks the button we want to "fetch" the data from our api
//   and display the data on our webpage
//   */
//    const info = await fetch("https://jsonplaceholder.typicode.com/posts");
//    const data = await info.json();//now we want the information's json object
//    console.log(data)
//    dataHolderDiv.innerHTML = `
//      <div>
//        <h2>${data.title}</h2>
//        <p>${data.body}</p>
//      </div>`

// })
//to practice the syntax for hashing....

window.addEventListener("hashchange", () => {
//supposed to fire in the event of a change in our URL hash
})
//state variable is the data that can change and gets information from the fetched info
const state = {
  title: [],
  selectedTitle: null
}
//create a function for when the hashchange event fires
function selectTitle(){
  //insert the functions that work together to retrieve the desired information

}

function getEventFromHash(){
  //this will be to retrieve the title from hash
  const title = window.location.hash.slice(1);

  //want it to find single title
  const singleTitle = state.title.find((object) => {
    return object.title === title;
  })
}


