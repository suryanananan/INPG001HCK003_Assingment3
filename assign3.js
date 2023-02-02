const url = 'https://covid-193.p.rapidapi.com/statistics';

let world
let countrys = 'Indonesia'

const mata = document.getElementById('mata')
const searchData = (filter) => {
    // console.log(world);
    return world.filter(dunia => {
        // console.log(dunia.country)
    if (dunia.country === filter){
        return dunia
    }
    })
}

const display = (data) => {

    for (let i = 0; i < data.length; i++){
        const cap = document.createElement("h1");
        cap.innerText = "COVID 19 TRACKER"
        // const caption = document.getElementById("caption");
        caption.appendChild(cap);

        const input = document.createElement("input");
        input.setAttribute('type', 'text');
        
        const parent = document.getElementById("parentDiv");
        parent.appendChild(input);

        const p = document.createElement('p')
        p.innerText = `${data[i].population} ${data[i].cases.active} ${data[i].cases.new} ${data[i].cases.recovered}
        ${data[i].cases.total} ${data[i].deaths.total} ${data[i].tests.total}`
        mata.appendChild(p)
    }

}

fetch(url,{
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f8d94be8cfmsh1a15ab8026b8121p14d951jsnc7fd617df14e',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
})

.then((res) => res.json())
.then((data) => {

    array = data
    arres = array.response
    console.log(arres)

    world = arres

    const Indonesia = searchData(countrys)
    
    display(Indonesia)
    
})

        const button = document.getElementById('cari')

        button.addEventListener('click', e => {
            e.preventDefault()
            const data = searchData(countrys)
            mata.innerHTML = ""

            display(data)
        })

;