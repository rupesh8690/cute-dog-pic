let p=document.querySelector("#para");
let btn=document.querySelector("button");
btn.addEventListener("click",getFacts);
let url="https://catfact.ninja/fact";
async function getFacts(){
  try{
    let res1= await axios.get(url);
    p.innerText=res1.data.fact;
    
    console.log(res1.data.fact);
  }
  catch(e){
    console.log(e);
  }
}
