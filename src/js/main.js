new Vue({
  el: "#app",
  data() {
    return {
      countries: this.getCountries(),
      name: 'Mircea',
      country: "",
      isNull: false,
      result: {
        name: 'Mircea',
        gender: 'male',
        probability: .96,
        country: 'Romania',
        } 
    };
  },
  methods: {
     getCountries(){
        this.$http.get(`https://restcountries.eu/rest/v2/all`).then(
        response => {
          this.countries = response.body;
        },
        response => {
          alert("API connection failed");
        })
     },
    search() {
      this.isNull = false;
      if (this.name != null && this.name.trim() != "") {
        this.$http.get(`https://api.genderize.io/?name=${this.name}&country_id=${this.country}`).then(
        response => {
          response.body.gender != null ? this.showResults(response.body) : this.isNull = true;
        },
        response => {
          alert("API connection failed");
        });
      }
    },
    showResults(result) {
      this.result.name = result.name;
      this.result.gender = result.gender;
      this.result.probability = result.probability;
    } },
 });