
// this function takes a stringified object taken from datepicker
// as an arguement, which at time of writing formats as
// "Thu Dec 10 2020 13:49:28 GMT+0000 (Greenwich Mean Time)"
// by default.

function dateFormatter(dateString){
    console.log(dateString)
    //start by splitting the sentence
    let result = dateString.split(' ')
    //take the chunks we want, and reorder them
    result = [result[2],result[1],result[3]]
    //next, convert the month to a number
    switch(result[1]){
        case "Jan":
            result[1] = "1"
            break;
        case "Feb":
            result[1] = "2"
            break;
        case "Mar":
            result[1] = "3"
            break;
        case "Apr":
            result[1] = "4"
            break;
        case "May":
            result[1] = "5"
            break;
        case "Jun":
            result[1] = "6"
            break;
        case "Jul":
            result[1] = "7"
            break;
        case "Aug":
            result[1] = "8"
            break;
        case "Sep":
            result[1] = "9"
            break;
        case "Oct":
            result[1] = "10"
            break;
        case "Nov":
            result[1] = "11"
            break;
        case "Dec":
            result[1] = "12"
            break;
        default:
            result[1] = "FAKE"
    }

    //then reassemble the string
    result = result.join("/")

    return result
}

export default dateFormatter