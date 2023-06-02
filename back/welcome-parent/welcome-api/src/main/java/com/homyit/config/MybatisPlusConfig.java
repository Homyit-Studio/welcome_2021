package com.homyit.config;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.homyit.dao.mapper")
public class MybatisPlusConfig {
}
