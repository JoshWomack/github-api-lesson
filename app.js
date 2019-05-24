$(document).ready(function() {
  function searchGithub(user) {
    const userSearchValue = $("#user").val();
    fetch(`https://api.github.com/users/${userSearchValue}/repos`)
      .then(response => response.json())
      .then(response => renderResults(response));
  }

  function renderResults(response) {
      console.log(response[0]['name']);
      console.log(response[0]["html_url"]);
      for(let i = 0; i < response.length; i++){
      $('#results').append(`<p><b>${response[i]['name']}:</b> <a href="${response[i]["html_url"]}">${response[i]["html_url"]}</a>`)
      }
  }

  function resetSearch(){
      $('#results').html('');
  }

  function watchForm() {
    $("#userSearch").on("submit", function(event) {
      event.preventDefault();
        resetSearch();
      searchGithub(user);
    });
  }

  watchForm();
});
