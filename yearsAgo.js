module.exports = function yearsAgo(year){
    const date = new Date();
  const currentYear = date.getFullYear();
    return currentYear -year;
    
    }