package com.price.comparision.ecom.entity;

public class JwtRequest {
	
	private String userName;
	
	private String userPassword;
	
	JwtRequest(){
		
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	
}
