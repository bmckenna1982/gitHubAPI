function watchForm() {
    $('.form-container').on('submit', '.search-form', searchGitHub );    
}

function searchGitHub() {
    event.preventDefault();
    emptyDisplay();
    let userHandle = $('.input-userHandle').val();        
        fetch(`https://api.github.com/users/${userHandle}/repos`)
            .then(Response => Response.json())            
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert(`Something wet wrong. ${error}`));
        

}

function logResults(responseJson) {
    for (let repo in responseJson) {
        console.log(`${responseJson[repo].html_url}`);
    }  
}

function emptyDisplay() {
    $('.results-list').empty();
}

function displayResults(responseJson) {    
    logResults(responseJson);      
    for (let repo in responseJson) {
    $('.results-list').append(`<li>${responseJson[repo].name}: <a href="${responseJson[repo].html_url}" target="_blank">${responseJson[repo].html_url}</a></li>`)
    } 
    // let sectionHTML = ``
    }
    


$(watchForm);