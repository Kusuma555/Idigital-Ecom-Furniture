package com.cg.ps.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class ProductCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long categoryId;
	private String name;
}
