// const url=("https://fakestoreapi.com/products/7=5")
const url=("https://fakestoreapi.com/products?limit=6")

var txt='';
const fetchData = async()=>{
    const respose = await fetch(url);
    const data = await respose.json();
    try{
        const respose = await fetch(url);
        const data = await respose.json();
        for( item of data){
             txt +=`
            <div class="card">
                <img src="${image.item}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h1>${data.title}</h1>
                    <h3>${data.price}</h3>
                    <h3>${data.category}</h3>
                    <h3>${data.rating['rate']}</h3f>
                </div>
            </div>
        `;
        }
    }catch(err){
        console.log(err);
    }
    document.getElementsByClassName('container')[0].innerHTML=txt;
}
fetchData();