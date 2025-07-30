require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAA9r*Vra+snpUAQAAHIHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nFGgFR1KquWm4K4gVa8ba1DxECpIUEAigw5X*fwp6enofd2V6eQpI65zvfJd8BobhANmrA9DvIGL7BEnXLsskQmAK1CkPEQA8EsIRgCjZOy82aeevfikUVm5EOC7n21MaK7XtULxenU+WrPE5D0XgBjx7IqkuC*d8UnKlEvvOUEVRehmfxHlN3V50ktHMNLyp0xa8nBzJWN7yrvIBHVxFihklkZDFKEYOJjRoHYvY1+I2VHEbyaAbbfl9Is3M6OshnUh0lzozjO4eh+bo*S7OrKEhfg7*n9312dLOJEt00sc4nvChyutQfNzid2wnbX26n+nU*2bTFO*wCRwQFVoBIicvmy7xTbSTP4+FKlyequliaM+O6zATbtHMZ2rITbkL+shLSoXpwvwac21uz81lDqI90nVuuhofQhy6Pmr4iFsmJWAcs8symTh39CtxhH165*h*evfUqul4LLjT0*C1y9LWQt6HvtsL4uo7uyJpdjHzzSsK+6H8Nvr*g7HIreRPWz0eQcwYuiVfsIOmcwJ9RRfPytDSwOXDe7p*wYVmx36FUjwMhccb5epC0b4lQBI4naafJnkdEvM2u4UVwqXlb1LJMfQqvKFsGEbxMdBztWiyMeet80aU0myt5pR7bCtmnfKgrL8+JrqixAjAVHj3AUISLksESU*LcE4UegMFti3yGyie9IFxJtbL0FzfGB3rCz31Hb8kCv615Aa6EvXGc60sdX8fO*PoCeiBj1EdFgQITFyVlzQoVBYxQAaZ**tUDBNXlu3Bdu4HQAyFmRemRKksoDD5U*TiEvk8rUm4b4mvdAjEw5T+3UVliEhUdjxWBzI*xDWkxLAswDWFSoJ8TIoYCMC1ZhX6mVqNBR7wyW+3EneGAHkifguAATIE4lGSBF0cDfiBNZfGP4tu9Kwuz7BtBJeiB5HlNkMTheMIPh9JYEni+u9kdPH4i7AoGqIQ4KcAUaM5RrseKaljpkY7d+VylkaJFCvic6MMa79Sr*BvjzbY2Jc6wuMrPj2tP3dKFn1JzDXV5rb6atKYHyRi**EORLlsyLpvTsCKDhXXVTO9sRs4+6We2nlfFnK01Ykb1DLMUkT31DX7QEELTSuq*seVBquvD0JkMj7A2Tc4JEymmzVrUo5euW4Bu2Ee*NqviLXZaGNZMsuzl+XQzEiTp5yS4LvXjfIsGs1u7X1negAvsVjsfdE+77Tzj5OdJP11dtmIQq6g5FwcvDTaeshEJF+nuu2mfoUl+PFb4aadOq+43xOiZfQI7Bf9bu3fgncX4R++XGj9ek39LpBtYo4k6Hr9yTqw5jNhJu1e8XDsucrU9RFzreq+jFZxVqgMej796IEtgGVKWgimAJGAUB6AHGK06z1okpL9ppqmWpf6YPIFFqXzmYIdTVJQwzcBUkIcDeTKURuP3Ww6jmQmLuHOmLcWm1Jm6UbJsW8LyI1ZA6b61W4DH31BLAQIUAxQAAAgIAA9r*Vra+snpUAQAAHIHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254710263034',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'qq2189',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 23,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
