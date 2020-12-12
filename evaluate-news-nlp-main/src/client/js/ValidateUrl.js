function ValidateURL(inputURL) {
    var url = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);



    if(inputURL==null)
        return 0;

    if(url == null)
        return 0;

    if(url != null)
         return 1;
     
    
     
 }

 export { ValidateURL }