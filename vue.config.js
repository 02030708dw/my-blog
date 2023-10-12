module.exports= {
   devServer:{
    proxy:{
      '/api':{
        target:'http://wewees.com',
      }
    }
  }
}