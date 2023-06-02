package com.homyit.controller;


import com.homyit.aop.LogAnnotation;
import com.homyit.service.ApplicantService;
import com.homyit.pojo.Result;
import com.homyit.pojo.ApplicantParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("register")
public class ApplicantController {

    @Autowired
    private ApplicantService applicantService;


    @PostMapping
    @LogAnnotation(module = "报名" ,operation ="详情 ")//日志打印
    public Result register(@RequestBody ApplicantParam applicantParam){
        return applicantService.register(applicantParam);
    }

}
