package com.example.reStore.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "products")
public class Product { //extends Model
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String color;
    private String size;
    private String description;
    private Integer price;
    private Integer pieces_in_stock; // количество в наличии

    @JsonBackReference
    @ManyToOne (optional=false, cascade=CascadeType.MERGE)
    @JoinColumn (name="model_id")
    private Model model;

}
