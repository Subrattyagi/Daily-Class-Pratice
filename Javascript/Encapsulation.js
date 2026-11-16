// Data aur us data par kaam karne wale functions ko ek hi jagah rakhna Encapsulation kehlata hai.

let bankAccount = {

    balance: 5000, //initial amount

    deposit: function(amount) {
        this.balance = this.balance + amount;  
    },

    showBalance: function() {
        console.log(this.balance);
    }
};

bankAccount.deposit(5000); 

bankAccount.showBalance();