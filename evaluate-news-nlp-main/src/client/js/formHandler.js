
function CheckPolarity(input){

    let result;

    if(input== 'P+')
    result = 'strong positive';
        
    if(input=='P') 
    result = 'positive';

    if(input=='NEW') 
    result = 'neutral'

    if(input=='N') 
    result = 'negative';

    if(input== 'N+') 
    result = 'strong negative';

    if(input==  'NONE') 
    result = 'no sentiment';
        
    return result.toUpperCase();


}


function handleSubmit(event) {
    event.preventDefault()


    let formText = document.getElementById('url').value

    if(Client.ValidateURL(formText)) {
    console.log("::: Form Submitted :::")


    fetch('http://localhost:8080/api', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:formText})
    })
    .then(res => res.json())

    .then(function(res) {
        document.getElementById('polarity').innerHTML = 'Polarity: '+CheckPolarity(res.score_tag)+'<br>';
        document.getElementById("agreement").innerHTML =' Agreement: '+res.agreement+'<br>';
        document.getElementById("subjectivity").innerHTML = 'Subjectivity: '+ res.subjectivity+'<br>';
        document.getElementById("confidence").innerHTML ='Confidence: ' +res.confidence+'<br>';
        document.getElementById("irony").innerHTML = 'Irony:'+ res.irony+'<br>';
    })

    }
    
    
    else {
        alert('invalid URL, please Enter it correctly.');
    }
}


export { handleSubmit }
export { CheckPolarity }