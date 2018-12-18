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
  public DateFormatConvert(date: Date, separator: string): string {
    let resultFormat = "";
    resultFormat += date.getFullYear() + separator;

    let month = Number(date.getMonth()) + 1;
    if (month < 10) { resultFormat += "0" + month + separator; }
    else { resultFormat += month + separator; }

    let day = date.getDate();
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
 * @returns if input date "2017-01-01", output date "2017-1 weeks (2017/01/01 ~ 2017/01/07)", today date during loop
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
}