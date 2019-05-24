$(document).ready(function() {
  function searchGithub(user) {
    const userSearchValue = $("#user").val();
    fetch(`https://api.github.com/users/${userSearchValue}/repos`)
      .then(response => response.json())
      .then(response => console.log(response));
  }

  function watchForm() {
    $("#userSearch").on("submit", function(event) {
      event.preventDefault();

      searchGithub(user);
    });
  }

  watchForm();
});
