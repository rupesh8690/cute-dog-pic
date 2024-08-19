// let p=document.querySelector("#para");
// let btn=document.querySelector("button");
// btn.addEventListener("click",getFacts);
// let url="https://catfact.ninja/fact";
// async function getFacts(){
//   try{
//     let res1= await axios.get(url);
//     p.innerText=res1.data.fact;
    
//     console.log(res1.data.fact);
//   }
//   catch(e){
//     console.log(e);
//   }
// }
let url= "https://dog.ceo/api/breeds/image/random";
let dog_img=document.querySelector(".dog_img");
let btn=document.querySelector("button");
btn.addEventListener("click",getDogPic);
async function getDogPic(){
    try{
        let res= await axios.get(url);
        console.log(res.data.message);
        dog_img.setAttribute("src",res.data.message);
    }
    catch(err){
        console.log("failed to get url");
    }
}
