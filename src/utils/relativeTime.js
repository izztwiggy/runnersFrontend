
export function relativeTime(createdAt) {
    const showCreatedDate = new Date(createdAt).toLocaleString('en')
    const createdAtMilisec = new Date(createdAt).getTime()

    const Today = new Date()
    const today = Today.getTime()  

    const timeDifference = today - createdAtMilisec
    const hours = (timeDifference / 3600000)
    
    if(hours > 12){
        return showCreatedDate
    }
    if(hours > 1 && hours <= 12){
       return `${Math.floor(hours)} hours ago`
    } 
    if(hours < 2 && hours > 1){
       return `${Math.floor(hours)} hour ago`
    }

    const minutes = (timeDifference / 60000)
    const seconds = (timeDifference / 1000)

    if(minutes < 59 && minutes > 1){
       return `${Math.floor(minutes)} minutes ago`
    }
    if(minutes <= 1){
        return `${Math.floor(seconds)} seconds ago`
    }

}

export function numberYears(){
    const current = new Date()
    //console.log(current.getFullYear())
    let thisYear = current.getFullYear()
    return parseInt(thisYear)
}

export function birthday(year,month,day){
    let birthday = new Date(year,month -1,day)
    return birthday.toDateString()
}

export function febDays(year){
    if(isLeap(year)){
        return 29
    } else {
        return 28
    }
}

export const months = [
    {name: 'January', days: 31},
    {name: 'February'},
    {name: 'March', days: 31}, 
    {name: 'April', days: 30}, 
    {name: 'May', days: 31}, 
    {name: 'June', days: 30}, 
    {name: 'July',days: 31}, 
    {name: 'August', days: 31}, 
    {name: 'September', days: 30}, 
    {name: 'October', days: 31}, 
    {name: 'November', days: 30}, 
    {name: 'December', days: 31}
]


export function calculateAge(year, month, day){
    let today = new Date()   
    let startDay = new Date(year,month,day)
    let startCheck = startDay.valueOf()
    let todayCheck = today.valueOf()
    const oneDay = (1000 * 60 * 60 * 24)
    
    let difference = todayCheck - startCheck
    return (Math.floor((difference /oneDay)/ 365))
}
export function isLeap(year){
    if(year % 4 === 0 && year % 100 !== 0){
    return true
    } else if(year % 4 === 0 && year % 100 === 0){
        if(year % 400 !== 0){
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

export function validDateCheck(year,month, day){
    if(month === 2 && day <= febDays(year)){
        return true
    } else if( day <= months[month-1].days){
        return true
    }else {
        return false
    }   
}


