export default {
  name: "ConfirmData",
  data: function() {
    return {
      valid: false,
      loading: false,
      user: {}
    };
  },
  methods: {
    submitData(){
      this.loading = true;
      setTimeout(() => {
        this.$router.push({ name: "Candidates" });
      }, 2000);
    }
  },
  mounted() {
    if(localStorage.getItem("user") != null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  },
  beforeMount(){
    if(localStorage.getItem("user") == null)
      this.$router.push('/login')
  }
};