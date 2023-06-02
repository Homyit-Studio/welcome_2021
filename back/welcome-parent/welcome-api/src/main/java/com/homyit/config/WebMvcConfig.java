package com.homyit.config;



import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${CROS_ALLOWED_ORIGINS}")
    private String[] allowed;
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //跨域配置
        registry.addMapping("/**").allowedOrigins(allowed);
    }


}
