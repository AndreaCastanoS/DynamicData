console.log(data)


let contenedorGeneral = document.getElementById("containerD")

for(let i = 0; i < data.events.length; i++){
    console.log(data.events[i]);

let div= document.createElement("div")

div.innerHTML += `

   <div class="col-md-1  pb-5  container-fluid "  style="width: 20rem; background-color: #ffccfe; "  >
    
          
   <div class="card" style="background-color: #550053; " >

             <img src="${data.events[i].image}"
             height="171"
              alt="${data.events[i].name}" >
             <div class="card-body" >
               <h5 class="card-title text-white" >${data.events[i].name}</h5>
               <p class="card-text text-white" style="height:4rem">${data.events[i].description}</p>
               <div  class="d-flex justify-content-between">
                 <p class="text-white"> ${data.events[i].price}</p>
               <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                 <button class="btn   btn btn-outline-dark" type="button" style="background-color: #ffccfe;">View More</button>
                </div>
             </div>
             </div>
           </div>
         </div>

         `
      div.style.border ="none"
         
         contenedorGeneral.appendChild(div)
}








