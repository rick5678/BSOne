var campoEmail = document.querySelector('#email');
var sugestao = document.querySelector("#sugestao");

var domains = ['gmail.com', 'aol.com', 'outlook.com', 'hotmail.com'];
var secondLevelDomains = ['']
var topLevelDomains = ["com", "net", "org", "br"];

campoEmail.addEventListener('blur', function() {
  Mailcheck.run({
    
    email: campoEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function(suggestion) {
      console.log(suggestion.full);
      sugestao.style.display = "block";
      sugestao.textContent = "Você quis dizer:  " + suggestion.full + " ?";
      sugestao.setAttribute("tabindex", "0");
    }
  });
});