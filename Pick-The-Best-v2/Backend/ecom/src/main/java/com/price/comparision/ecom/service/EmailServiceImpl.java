package com.price.comparision.ecom.service;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.price.comparision.ecom.model.Email;

@Service
public class EmailServiceImpl implements EmailService {
	
	 @Value("${spring.mail.username}") 
	 private String sender;
	 
	 @Autowired 
	 private JavaMailSender javaMailSender;

	@Override
	public boolean sendMail(Email email) {
		
		try {
			
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			MimeMessageHelper mailMessage = new MimeMessageHelper(mimeMessage, "utf-8");
            
            mailMessage.setFrom(sender);
            mailMessage.setTo(email.getRecipient());
            mailMessage.setText(email.getMsgBody());
            mailMessage.setSubject(email.getSubject());
            mailMessage.setText(email.getMsgBody(),true);

            javaMailSender.send(mimeMessage);
            return true;
        }
        catch (Exception e) {
            e.printStackTrace();
            return false;
        }
	}

}
