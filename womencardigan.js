//let container = document.getElementById("product");
// fetch ("https://bb-nwfw.onrender.com/Women")

//   .then((res) => {
//     return res.json();
//   })
//   .then((actualData) => {
//     console.log(actualData)
//    // Product(actualData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  let url = "https://bb-nwfw.onrender.com/Women";
  async function getdata() {
    try {
      let res = await fetch(url);
      let out = await res.json();
      displaydata(out);
        console.log(out);
    } catch (err) {
      alert(err);
    }

  }
  getdata()
  function displaydata(data){
    // let obj={}
    // for(let i=0;i<data.length;i++){
    //   if(!obj[data[i].Ptype]){
    //     obj[data[i].Ptype]=1
    //   }else{
    //     obj[data[i].Ptype]++
    //   }
    // }
    // console.log(obj);
    let Sweater=data.filter((ele,ind)=>{
      if(ele.Ptype=="Sweater"){
        return ele
      }
    })
    displaydataofpro(Sweater)
    console.log(Sweater);
    let shirts=data.filter((ele,ind)=>{
      if(ele.Ptype=="shirts"){
        return ele
      }
    })
    displaydataofshirt(shirts)
    console.log(shirts);
    let skirts=data.filter((ele,ind)=>{
      if(ele.Ptype=="skirts"){
        return ele
      }
    })
displaydataofskirts(skirts)
console.log(skirts)

let bags=data.filter((ele,ind)=>{
    if(ele.Ptype=="bags"){
      return ele
    }
    })
displaydataofbags(bags)
console.log(bags)
  }

function displaydataofpro(out) {
    // console.log(out);
    document.querySelector(".product_card").innerHTML = "";
    out.forEach((elem) => {
      let div = document.createElement("div");



      let productimg = document.createElement("img");
      productimg.setAttribute("src", elem.images[0]      );

      let title = document.createElement("h4")
      title.innerText = elem.title;


      let price = document.createElement("h4");
      price.innerText = elem.price;





      div.append(productimg,title,price)

      document.querySelector(".product_card").append(div);

    })

  }



  ////skirts data
  function displaydataofskirts(out) {
    // console.log(out);
    document.querySelector(".skirtspro").innerHTML = "";
    out.forEach((elem) => {
      let div = document.createElement("div");



      let productimg = document.createElement("img");
      productimg.setAttribute("src", elem.images[0]      );

      let title = document.createElement("h4")
      title.innerText = elem.title;


      let price = document.createElement("h4");
      price.innerText = elem.price;





      div.append(productimg,title,price)

      document.querySelector(".skirtspro").append(div);

    })

  }

////shirtsdata
function displaydataofshirt(out) {
    // console.log(out);
    document.querySelector(".shirtdata").innerHTML = "";
    out.forEach((elem) => {
      let div = document.createElement("div");



      let productimg = document.createElement("img");
      productimg.setAttribute("src", elem.images[0]      );

      let title = document.createElement("h4")
      title.innerText = elem.title;


      let price = document.createElement("h4");
      price.innerText = elem.price;





      div.append(productimg,title,price)

      document.querySelector(".shirtdata").append(div);

    })

  }

  function displaydataofbags(out) {
    // console.log(out);
    document.querySelector(".bagsdata").innerHTML = "";
    out.forEach((elem) => {
      let div = document.createElement("div");



      let productimg = document.createElement("img");
      productimg.setAttribute("src", elem.images[0]      );

      let title = document.createElement("h4")
      title.innerText = elem.title;


      let price = document.createElement("h4");
      price.innerText = elem.price;





      div.append(productimg,title,price)

      document.querySelector(".bagsdata").append(div);

    })

  }