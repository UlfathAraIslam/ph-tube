
const loadCategoryVideos = (id)=>{

    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    // console.log(url);
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> {
        const clickedButton= document.getElementById(` btn-${id}`);
        // console.log('clickedButton:', clickedButton);
        displayVideos(data.category)
    })
}