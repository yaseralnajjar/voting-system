export default {
  name: "Results",
  data: function() {
    return {
      bottomNav: 'recent',
      noVotes: false,
      candidates: [],
      candidatesVotes: []
    };
  },
  computed:{
   
  },
  methods:{
    voteCount(id){
      let count = this.candidatesVotes.filter((x) => x.candidateID === id).length;
      return count;
    },
    votePrograss(id){
      let count = this.candidatesVotes.filter((x) => x.candidateID === id).length;
      return count / this.candidatesVotes.length * 100;
    }

  },
  mounted() {
    if(localStorage.getItem("candidates") != null){
      this.noVotes = true;
      this.candidates = JSON.parse(localStorage.getItem('candidates')); 
      this.candidatesVotes = JSON.parse(localStorage.getItem('voters')); 
    }
  }
};