({
    onAccountsLoaded: function( component, event, helper ) {
        var accounts = event.getParam( 'accounts' );
        const accountsArray = [];
        for(var i = 0; i < accounts.length; i++) {
            var account = accounts[i];
            var accountBody = 'name: ' + account.Name
                + '\n webside: ' + account.Website
                + '\n phone: ' + account.Phone
                + '\n addres: ' + account.BillingStreet +  account.BillingCity + account.BillingPostalCode 
                + '\n';
            accountsArray.push(accountBody);
        }
        component.set('v.accounts', accountsArray.toString);
    },

    onButtonClick: function( component, event, helper ) {
        var email = component.get('v.email');
        var accounts = component.get('v.accounts');
        helper.handleEmailSending(component, email, accounts);
    },

})
