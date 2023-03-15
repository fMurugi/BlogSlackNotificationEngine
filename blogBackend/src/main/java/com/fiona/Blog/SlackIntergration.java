package com.fiona.Blog;

import com.github.seratch.jslack.Slack;
import com.github.seratch.jslack.api.webhook.Payload;
import com.github.seratch.jslack.api.webhook.WebhookResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class SlackIntergration {
//    @Value("${spring.webHookUrl.url}")
    private   String webHooksUrls;

    @Value("${OAuthToken}")
    private static String oAuthToken ;

    @Value("${spring.webHookUrl.url}")
    public void setWebHooksUrls(String webHooksUrls) {
        this.webHooksUrls = webHooksUrls;
    }
    private static  String slackChannel ="announcements";



//    public static void main(String[] args) {
////        System.out.println("Test message");
//        sendMessageToSlack("Hello everyone. ");
//    }

    public  void sendMessageToSlack(String message){
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
