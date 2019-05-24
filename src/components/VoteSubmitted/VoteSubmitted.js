export default {
  name: "VoteSubmitted",
  data: function() {
    return {
      toolbarTitle: "Vote Status",
      user: {},
      chosenCandidate: {}
    };
  },
  methods:{
    logout(){
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  },
  computed:{
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