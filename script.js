let app = new Vue({
  el: '#app',
  data: {
    joke: "<div class=\"jokes\"><img src=\"?\"></img><p>Jokes go here</p><button @click=\"generateJoke()\">Generate new Joke</button></div>"
  },
  created: {
    startapp();
  },
  methods {
    function startapp(){
      document.getElementById("jokes").innerHTML = joke;
    }
  }

});
