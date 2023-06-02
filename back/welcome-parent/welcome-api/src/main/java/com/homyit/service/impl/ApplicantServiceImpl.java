package com.homyit.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.homyit.dao.ApplicantMapper;
import com.homyit.pojo.Applicant;
import com.homyit.service.ApplicantService;
import com.homyit.service.ThreadService;
import com.homyit.pojo.Result;
import com.homyit.pojo.ApplicantParam;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicantServiceImpl implements ApplicantService {
    @Autowired
    private ApplicantMapper applicantMapper;

    @Autowired
    private ThreadService threadService;

    @Override
    public Result register(ApplicantParam applicantParam) {
        //判断参数是否合法
        String classs = applicantParam.getClasss();
        String introduction = applicantParam.getIntroduction();
        String mail = applicantParam.getMail();
        String number = applicantParam.getNumber();
        String name = applicantParam.getName();
        if(


        StringUtils.isBlank(mail)  || StringUtils.isBlank(name)
                || StringUtils.isBlank(number)){
            return Result.fail(10001,"参数有误");
        }
        //判断是否已经报名
        LambdaQueryWrapper<Applicant> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Applicant::getNumber,number);
        queryWrapper.last("limit 1");
        Applicant applicant = applicantMapper.selectOne(queryWrapper);
        if(applicant != null){
            return Result.fail(10002,"此学号已经报名");
        }
        //赋值,持久化到数据库
        applicant = new Applicant();
        applicant.setClasss(classs);
        applicant.setIntroduction(introduction);
        applicant.setMail(mail);
        applicant.setName(name);
        applicant.setNumber(number);

        applicantMapper.insert(applicant);

        //多线程发送邮件
        threadService.send(applicantParam);

        return Result.success("报名成功");
    }

}
