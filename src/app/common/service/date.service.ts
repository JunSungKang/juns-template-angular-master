import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor() { }

/**
 * @description date format convert
 * @param {*} default date format
 * @returns user interface format change
 * @since 2017. 11. 13
 * @author jskang
*/
  public DateFormatConvert(mDate: Date, separator: string): string {
    let resultFormat = "";
    resultFormat += mDate.getFullYear() + separator;

    let month = Number(mDate.getMonth()) + 1;
    if (month < 10) { resultFormat += "0" + month + separator; }
    else { resultFormat += month + separator; }

    let day = mDate.getDate();
    if (day < 10) { resultFormat += "0" + day; }
    else { resultFormat += day; }

    return resultFormat;
  }

/**
 * @description Calculate Date Week
 * @param {*} date format
 * @returns if 2017 year 10 weeks, return 10
 * @since 2017. 11. 13
 * @author jskang
 */
  public DateWeeks(mDate: Date): number {
    let initialDate: Date = new Date(mDate);
    let date: Date = new Date('1/1/' + initialDate.getFullYear()); // Full Date
    let day = initialDate.getDay(); // Day of the week Number

    let flag = true;
    let weeks = 1;

    while (true) {
      date = new Date(date.getTime());
      if (date > initialDate) { break; }
      else {
        if (flag) {
          date.setTime(date.getTime() + (6 - day) * 24 * 60 * 60 * 1000);
          flag = !flag;
        } else {
          weeks++;
          date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
        }
      }
    }

    return weeks;
  }

/**
 * @description Returns all result values calculated from the desired date to today's date, for all years
 * @param {*} input date format ("2017-01-01")
 * @returns ["2010-1 Weeks (2010/01/01 ~ 2017/01/02)", ..., "2017-46 Weeks (2017/11/12 ~ 2017/11/18)"]
 * @since 2017. 11. 13
 * @author jskang
*/
  public DateWeeksRange(mDate: Date) {

    let initialDate = new Date(mDate);
    let date = initialDate; // Full Date
    let day = initialDate.getDay(); // Day of the week Number

    let dateObject = [];
    let flag = true;
    let weeks = this.DateWeeks(mDate);
    let oldYear = date.getFullYear();

    while (true) {
      let dateJson = { text: "", value: "" };
      let dateText = "";
      date = new Date(date.getTime());

      if (date.getFullYear() > oldYear) { weeks = 1; }
      if (date > new Date()) { break; }
      else {
        oldYear = date.getFullYear();

        if (flag) {
          dateText = oldYear + "-" + weeks + " Weeks (" + this.DateFormatConvert(date, "/");
          date.setTime(date.getTime() + (6 - day) * 24 * 60 * 60 * 1000);
          flag = !flag; weeks++;
        } else {
          dateText = oldYear + "-" + weeks + " Weeks (" + this.DateFormatConvert(date, "/");
          date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
          weeks++;
        }

        dateText += "~" + this.DateFormatConvert(date, "/") + ")";
        dateJson.text = dateText;
        dateJson.value = dateText;
        dateObject.push(dateJson);
      }
    }

    return dateObject;
  }

/**
 * @description Print the corresponding month of the desired date ("2010-01-01")
 * @param {*} input date format ("2017-01-01")
 * @returns "2010/01"
 * @since 2017. 11. 13
 * @author jskang
*/
  public DateMonth(mDate: Date){
    let resultFormat = "";

    let year = mDate.getFullYear();

    let month = Number(mDate.getMonth())+1;
    if (month < 10) { resultFormat += year+ "0" +month; }
    else { resultFormat += year + month; }

    return resultFormat;
  }

/**
 * @description Prints all the months from the desired date ("2010-01-01") to the current date ("2017-11-13")
 * @param {*} input date format ("2017-01-01")
 * @returns ["2010/01", "2010/02", "2010/03" ..., "2017/11"]
 * @since 2017. 11. 13
 * @author jskang
*/
  public DateMonthCurrent(mDate: Date){
    let initialDate = new Date(mDate);
    let date = initialDate; // Full Date
    let dataObject = [];
  
    while(true){
      let dateJson = { text: "", value: ""};
        date = new Date(date.getTime());
        if(date > new Date()){ break; }
        else{
            dateJson.text = this.DateMonth(date); dateJson.value = this.DateMonth(date);
            dataObject.push(dateJson);
            date.setTime(date.getTime() + (new Date(date.getFullYear(), Number(date.getMonth())+1, 0).getDate())*24*60*60*1000);
        }
    }
    return dataObject;
  }

  /**
 * @description Print all the years from the desired date ("2010-01-01") to the current date ("2017-11-13")
 * @param {*} input date format ("2017-01-01")
 * @returns [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
 * @since 2017. 11. 13
 * @author jskang
*/
public DateYearCurrent(mDate: Date){
  let initialDate = new Date(mDate);
  let date = initialDate; // Full Date
  let dataObject = [];

  while(true){
    let dateJson = { text: "", value: ""};
      date = new Date(date.getTime());
      if(date > new Date()){ break; }
      else{
          dateJson.text = this.DateMonth(date); dateJson.value = this.DateMonth(date);
          dataObject.push(dateJson);
          date.setTime(date.getTime() + (new Date(date.getFullYear(), Number(date.getMonth())+1, 0).getDate())*24*60*60*1000);
      }
  }
  return dataObject;
}
}