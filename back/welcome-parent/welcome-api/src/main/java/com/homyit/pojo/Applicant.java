package com.homyit.pojo;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Applicant {

    @TableId(value = "id",type = IdType.AUTO)
    private Long id;

    private String name;

    private String number;

    private String mail;

    private String introduction;

    private String classs;
}
