require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKNp41rRad*0UgQAAHIHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nFGq6KWtVVy7XFC4MXGtutfYgQIQoEk4DClP99i+7pmXnYne3lKSSpc77zXfINlAQztEAtmH4DFcUN5Khf8rZCYArM+nRCFAxAAjkEU7Cdt*jgCK187SzrRuzbLt7jbbHptGvRLMRgQ59VqGv3Nr89gccAVPUxx*FvCl4SMVNfntMzWc7tBl*tnG33WXM4n6LRq3rZc8WH9la0DrfVE3j0FSGmuEydKkMFojBfoDaAmH4O*tolURsEywr6u1KIRUO+ukHW5ojcFv7GW9z5ctlIeOOFq8*Bv5I532VepUsockezThXMI1+8yEG6o7PFtTFWftd27UqXx+*wGU5LlHgJKjnm7ad5vz7vGoWbyu10dl5Oobp8hp2qt6TKxw3fzRcZ5fu9Z6pFaHwO+GobfU2GTTi7SZS4u4rUI8oPLXGXRpoJozNGYfR6WVWN9Por8IB+eOXyf3iPXIVU9xs9jPaFcmOqx3ErSK+2tg+56R73Y6+zU*3iKU74OfipHo0LQRK1ZHbl8bqLbT8Rtw4bngp*gYM89pz4mDYana1+woe8pr9FeUxFbu4c*ZAdik5mydbxWDTa1ElpYcHa87Od4zCUT50+5ucqcY2X6tBl3WT5ygK6jHJIhFsix1sbSoIi7q2uSVPj6W2iC2q9BEzlxwBQlGLGKeSYlP2eIukDAJNmi2KK+Bu9wK1tuXVIkuks6NLT5DCxxvVzmcv5zWvtsBFImxSRLoUsfAIDUFESI8ZQMsOME9quEGMwRQxM**xrAEp05+*C9e1UeQBOmDIelnWVE5h8qPpxCOOY1CXftmVs9QtEwVT6uY04x2XKeh7rEtI4ww2yMsgZmJ5gztCPCRFFCZhyWqMfqbVI0hO*Nm3dj3ZzMADFmyA4AVOgDDVdlpSRKqnadKj*wb7c+rKwqr6UiIMByN+uyZoyHE+k4VAba7Ik9Tf7g8cPhH3BBHGIcwamwAr2+n1smI4*sgu2en42WGpYqQF+TvRhjXfqTelMpVl3n2mC4wl1fN37obkl87ggMx*aum9uZuROIs0ZP*1DETAFZ9FfyqO5uP6a3mSSROJYWKvLej+5WiG*tFB1lAMV7VTtvkrZodKg1zWVeDy5h6tzdGpldgpeVTrfR07lip3izyb30E6f+m4JanCMfm3Wos52Ypp5cLbJ*CN9WdyLcJIKepA1Ig47V4Xi+hXpQ1OBgphf8qhTA32zy9X2rLHQVYkjKIW5tJLz6m4M5ejguln6btq30OTfHyv8Zqdeq*73hNFb9kvYK*jf2r0D7y0mPQa*1Pj+mvxLIs114o0m5ni8EYLMCmi5yLsXI7xa+*nV7KJU6NbhZrSCbm0G4PH4awCqHPIToQWYAlgmlOAEDAAlde9ZrzyR3zSzTM8z1++T55Bx42cOdrhAjMOiAlNZH8pDbayOh++3AkqqGWRZ78yFls203tStUVVbDvlHrIDRf*6agcffUEsBAhQDFAAACAgAo2njWtFp3*RSBAAAcgcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '254710263034',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'qq2189',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
