package com.fiona.Blog;

import com.github.seratch.jslack.Slack;
import com.github.seratch.jslack.api.webhook.Payload;
import com.github.seratch.jslack.api.webhook.WebhookResponse;
import org.springframework.beans.factory.annotation.Value;

public class SlackIntergration {

    private static String webHooksUrls=System.getProperty("webHookUrl.url");
    @Value("${OAuthToken}")
    private static String oAuthToken ;
    private static  String slackChannel ="announcements";

//    public static void main(String[] args) {
////        System.out.println("Test message");
//        sendMessageToSlack("Hello everyone. ");
//    }

    public static void sendMessageToSlack(String message){
        try {
            StringBuilder messageBuilder = new StringBuilder();
            messageBuilder.append(message);

            Payload payload = Payload.builder().channel(slackChannel).text(messageBuilder.toString()).build();

            WebhookResponse webRes = Slack.getInstance().send(webHooksUrls, payload);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
