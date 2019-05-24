import { setTimeout } from "timers";

export default {
  name: "Login",
  data: function() {
    return {
      loginWith: "",
      snackbar: false,
      snackbarColor: '',
      snackbarText: '',
      timeout: 6000,
      valid: false,
      disable: false,
      items: ['BankID'],
      bankIdDialog: false,
      loadingDialog: false,
      bankIdNumber: "",
      bankIdPass: "",
      user: {},
      loading: false,
      bankId:[
        {
          id: "1234567891011",
          password: "123456",
          firstName: "Mohammed",
          lastName: "Alhakem",
          nationalId: "05722255",
          address: "2678 Gulsaren Street"
        },
        {
          id: "8520852085208",
          password: "123456",
          firstName: "Yaser",
          lastName: "Alnajjar",
          nationalId: "0588222",
          address: "2678 Kaliland Street"
        },
        {
          id: "1234567891012",
          password: "123456",
          firstName: "Zaid",
          lastName: "Alkhdour",
          nationalId: "0655585",
          address: "3000 Kaliland Street"
        },
        {
          id: "1234567891013",
          password: "123456",
          firstName: "Suleyman",
          lastName: "Gelener",
          nationalId: "077888",
          address: "2555 Salams Street"
        },
        {
          id: "1234567891014",
          password: "123456",
          firstName: "Issam",
          lastName: "Alhabash",
          nationalId: "0888855",
          address: "1500 Kaliland Street"
        }
      ]
    };
  },
  methods: {
    loginVerification(){
      this.bankIdDialog = true;
    },
    validateBankId(){
      this.user = this.bankId.find(x => x.id === this.bankIdNumber);
      if(!this.user){
        this.snackbarText = 'ID Number Does Not Exist';
        this.snackbar = true;
        return;
      }
      if(this.user.password != this.bankIdPass){
        this.snackbarText = 'Wrong password';
        this.snackbar = true;
        return;
      }
      this.loadingDialog = true;
      setTimeout(() => {
        this.loadingDialog = false;
        localStorage.setItem("user",  JSON.stringify(this.user));
        if(localStorage.getItem('voters')){
          let voters = JSON.parse(localStorage.getItem('voters'));
          if(voters.find(x => x.voterID === this.user.id)){
            this.$router.push({name: "VoteSubmitted"});
            return;
          }
        }
        this.$router.push({ name: "ConfirmData" });
      }, 3000);
    },
    validate(){
      if(this.loginWith){
        this.valid = true;
      }
    },
    enableBtn(){
      if(this.bankIdNumber && this.bankIdPass)
        this.disable = true;
      else
        this.disable = false;
    }
  }
};