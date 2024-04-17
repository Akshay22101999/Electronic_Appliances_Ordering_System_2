package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class OlxController {

	@Autowired
	OwnerRepo ownerRepo;
	@Autowired
	RegistrationRepo registrationRepo;
	
	@Autowired
	UserRepo userRepo;

	@RequestMapping("load")
	public List<Owner> load()
	{
		return ownerRepo.findAll();
	}

	@RequestMapping("add")
	public Owner add(@RequestBody Owner owner)
	{
		owner=ownerRepo.save(owner);
		return owner;
	}

	@RequestMapping("delete{id}")
	public boolean delete(@PathVariable int id)
	{
		try
		{
			ownerRepo.deleteById(id);
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	@RequestMapping("login{username}and{password}")
	public int login(@PathVariable String username, @PathVariable String password)
	{
		List<Registeration> list= registrationRepo.findAll();
		for(Registeration register:list)
		{
			if(username.equals(register.getRuserername()))
			{
				if(password.equals(register.getRpassword()))
					{
						if(register.getActive()==1)
							return 3; // login successfull
						else 
							return 2; //account not active
					}
				
					else
						return 1; // password wrong
			}
		}
		return 0; // username wrong
		
	}
	
	
	@RequestMapping("loginUser{username}and{password}")
	public int loginUser(@PathVariable String username, @PathVariable String password)
	{
		List<Userlogin> list =userRepo.findAll();
		for(Userlogin user:list)
		{
			if(username.equals(user.getUuserername()))
			{
				if(password.equals(user.getUpassword()))
				{
					if(user.getActive()==2)
						return 3; // login successfull
					else
						return 2;  // account not active
				}
				else 
					return 1; // password wrong
			}
		}
		return 0; // username wrong;
	}
	
	@RequestMapping("register")
	public boolean register(@RequestBody Registeration registeration)
	{
		try
		{
			registeration.setActive(0);
			registrationRepo.save(registeration);
			return true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
			return false;
		}
	}
	
	@RequestMapping("userregister")
	public boolean userregister(@RequestBody Userlogin userlogin)
	{
		try 
		 {
			userlogin.setActive(0);
			userRepo.save(userlogin);
			return true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
			return false;
		}
	}


}
