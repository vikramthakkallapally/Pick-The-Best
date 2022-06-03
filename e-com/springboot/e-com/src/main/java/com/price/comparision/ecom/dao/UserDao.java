package com.price.comparision.ecom.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.price.comparision.ecom.entity.User;

@Repository
public interface UserDao extends CrudRepository<User,String> {
}
