package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity @NoArgsConstructor@AllArgsConstructor@ToString@Data
public class Registeration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String rname;
	String ruserername;
	String rpassword;
	long rmobile;
	int active;
	

}
