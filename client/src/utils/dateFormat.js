const dateFormat = (date) => {
    // assigns year/month/day 
    const year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();

    // adds a zero to the day & month if it's over 10
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    // formats the date in month/day/year format
    const formatDate = month + '/' + day + '/' + year;

    return formatDate;
}

module.exports = dateFormat;