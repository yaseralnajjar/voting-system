export default {
  name: "Candidates",
  data: function() {
    return {
      confirmDialog: false,
      showCandidate: true,
      showSuccessMsg: false,
      loading: false,
      toolbarTitle: "Candidates",
      user: {},
      voters: [],
      candidates: [{
        id: 1,
        name: "Jeremy Barnett",
        party: "National Unity Party",
        photo: require("@/assets/candidates/1.jpg")
      },
      {
        id: 2,
        name: "Robert Diaz",
        party: "Republican Turkish Party",
        photo: require("@/assets/candidates/2.jpg")
      },
      {
        id: 3,
        name: "Daniel Bailey",
        party: "People's Party",
        photo: require("@/assets/candidates/3.jpg")
      },
      {
        id: 4,
        name: "Michael Lane",
        party: "Democratic Party",
        photo: require("@/assets/candidates/4.jpg")
      }],
      chosenCandidate:{}
    };
  },
  methods:{
    confirmCandidate(id){
      this.confirmDialog = true;
      this.chosenCandidate = this.candidates.find(x => x.id === id);
    },
    submitVote(){
        this.loading = true;
        let voter = JSON.parse(localStorage.getItem('user'));
        this.chosenCandidate.voterID = voter.id;
        localStorage.setItem('vote', JSON.stringify(this.chosenCandidate));
        let voters = [];
        if(localStorage.getItem('voters')){
          voters = JSON.parse(localStorage.getItem('voters'));
        }
        voters.push({
          voterID: voter.id,
          candidateID: this.chosenCandidate.id,
          candidatePhoto: this.chosenCandidate.photo,
          candidateName: this.chosenCandidate.name,
          candidateParty: this.chosenCandidate.party
        });
        localStorage.setItem('voters', JSON.stringify(voters));
        localStorage.setItem('candidates', JSON.stringify(this.candidates));
      setTimeout(() => {
        this.confirmDialog = false;
        this.toolbarTitle = "Vote Status";
        this.showCandidate = false;
        this.showSuccessMsg = true;
      }, 3000);
    },
    logout(){
      localStorage.removeItem('user');
      this.$router.push('/');
    },
    goToResults(){
      localStorage.removeItem('user');
      this.$router.push('/results');
    }
  },
  computed:{
    checkVote(){
      if(localStorage.getItem("vote") === null)
        return true
      if(this.user.id == this.chosenCandidate.voterID)
        return false
      else
        return true
    }
  },
  beforeMount(){
    if(localStorage.getItem("user") == null)
      this.$router.push('/login')
  },
  mounted() {
    if(localStorage.getItem("vote") != null){
      this.user = JSON.parse(localStorage.getItem('user'));
      this.chosenCandidate = JSON.parse(localStorage.getItem('vote'));
    }
  }
};