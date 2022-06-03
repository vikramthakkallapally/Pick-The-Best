package com.price.comparision.ecom.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.price.comparision.ecom.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role,String>{

}
