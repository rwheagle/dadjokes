let app = new Vue({
  el: '#app',
  data: {
    max: 10,
    min: 0,
    num: 0,
    generate: "Generate Joke",
    jokes: []
  },
  created() {
    this.startapp();
  },
  computed: {
    number() {
      if (this.num > this.max) {
        return this.max;
      }
      if (this.num < this.min) {
        return this.min;
      }
      return this.num;
    }
  },
  methods: {
    startapp: function() {
      while (this.jokes.length < this.number) {
        this.jokes.push({
          id: this.jokes.length,
          text: "Click for Joke"
        });
      }
      while (this.jokes.length > this.number) {
        this.jokes.pop();
      }
    },
    generateAllJokes: async function(){
      for(let i = 0; i < this.number; i++){
        await this.generateJoke(i);
      }
    },
    generateJoke: async function(id) {
      let url = "https://icanhazdadjoke.com/";
      const response = await axios.get(url, {
        'headers': {
          'Accept': 'application/json'
        }
      });
      this.jokes[id].text = response.data.joke;
      this.$forceUpdate();
    }
  }
});
