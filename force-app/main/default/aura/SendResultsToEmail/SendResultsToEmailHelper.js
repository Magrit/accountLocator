({
    handleEmailSending : function(component, email, accounts) {
        var action = component.get('c.sendEmail');
        action.setParams({
            address : email,
            body : accounts,
        });
        $A.enqueueAction(action);
    }
})
