fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia',{
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
    // console.log(arres);

    for(i=0;i<arres.length;i++)
    {
        const data = document.getElementById('data');
        // const regions = document.createElement('p');
        const active = document.createElement('p');
        const newcass = document.createElement('p');
        const recover = document.createElement('p');
        const totalcas = document.createElement('p');
        const totaldeat = document.createElement('p');
        const totaltes = document.createElement('p');
        

        // regions.innerText  = "Country" + " " + arres[i].country
        active.innerText  = "Active Cases" + " " +arres[i].cases.active
        newcass.innerText  = "New Cases" + " " +arres[i].cases.new
        recover.innerText  = "Recover" + " " +arres[i].cases.recovered
        totalcas.innerText  = "Total Cases" + " " +arres[i].cases.total
        totaldeat.innerText  = "Total Death" + " " +arres[i].deaths.total
        totaltes.innerText  = "Total Test" + " " +arres[i].tests.total
        
    // data.appendChild(regions)        
    data.appendChild(active)        
    data.appendChild(newcass)        
    data.appendChild(recover)        
    data.appendChild(totalcas)        
    data.appendChild(totaldeat)        
    data.appendChild(totaltes)        
    

    console.log(active + newcass + recover + totalcas + totaldeat + totaltes);

    

    }
    
});