package com.homyit.service;

import com.homyit.pojo.ApplicantParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;

@Component
public class ThreadService {

    @Autowired
    private JavaMailSender javaMailSender;
//多线程,不干扰报名的时间,因为报名发送邮件可能会耽误相对比较长的时间
    @Async("taskExecutor")
    @ResponseBody
    public void send(ApplicantParam applicantParam){
        String mail = applicantParam.getMail();
        String name = applicantParam.getName();
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("homyit@126.com");
        simpleMailMessage.setTo(mail);
        simpleMailMessage.setSubject(name);
        simpleMailMessage.setText("宏奕是一个展现你才华的舞台，希望你在这里表现" +
                "你最好的创意，宏奕欢迎你的到来");
        System.out.println("开始执行-------------------------------------");
        javaMailSender.send(simpleMailMessage);

    }
}
