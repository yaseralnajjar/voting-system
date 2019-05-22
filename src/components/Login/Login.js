import { setTimeout } from "timers";

export default {
  name: "Login",
  data: function() {
    return {
      items: ['BankID'],
      bankIdDialog: false,
      loadingDialog: false
    };
  },
  methods: {
    loginVerification(){
      this.loadingDialog = true;
      setTimeout(() => {
        this.loadingDialog = false;
        this.bankIdDialog = true;
      }, 2000);
    }
  }
};