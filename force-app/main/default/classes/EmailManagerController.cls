public with sharing class EmailManagerController {
    @AuraEnabled
    public static String sendEmail(String address, String message){
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {address};
        mail.setToAddresses(toAddresses);
        mail.setSubject('Your Account Searching Results');
        mail.setPlainTextBody(message);
        Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
        return address;
    }
}
