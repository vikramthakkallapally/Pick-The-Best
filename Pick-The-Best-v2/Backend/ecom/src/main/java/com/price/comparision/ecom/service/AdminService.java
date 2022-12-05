package com.price.comparision.ecom.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.price.comparision.ecom.constants.BusinessConstants;
import com.price.comparision.ecom.model.AdminStats;
import com.price.comparision.ecom.model.Contactus;
import com.price.comparision.ecom.model.Email;
import com.price.comparision.ecom.model.Request;
import com.price.comparision.ecom.repository.ContactusRepository;
import com.price.comparision.ecom.repository.RequestRepository;

@Service
@Transactional
public class AdminService {
	
	@Autowired
	private RequestRepository requestRepository;

	@Autowired
	private ContactusRepository contactUsRepository;
	
	@Autowired
	private EmailService emailService;
	
	public Long saveProductRequest(Request req) {
		System.out.println(req.getRequestStatus());
		if(req.getRequestStatus().equalsIgnoreCase("Y")) {
			Email mail = new Email();
			mail.setSubject(BusinessConstants.PRODUCT_REQUEST_SUBJECT);
			String content = new String(BusinessConstants.PRODUCT_REQUEST_RESPONSE);
			content  = content.replace("{{%name%}}", req.getUsername());
			content  = content.replace("{{%productname%}}", req.getProductname());
			mail.setRecipient(req.getEmail());
			mail.setMsgBody(content);
			try {
				emailService.sendMail(mail);
				System.out.println("Email Sent");
			}catch(Exception ex) {
				System.out.println(ex.getMessage());
			}
			
		}
		return requestRepository.save(req).getId();
	}
	
	public void submitFeedback(Contactus cts) {
		contactUsRepository.save(cts);
	}
	
	public List<Request> findRequests(Date startDate, Date endDate){
		return requestRepository.getRequests(startDate, endDate);
	}
	
	public List<AdminStats> getRequestStats(){
		return requestRepository.getStats();
	}
	
	public List<Contactus> getFeedbacks(Date startDate, Date endDate){
		return contactUsRepository.getFeedback(startDate, endDate);
	}
	
	
}
