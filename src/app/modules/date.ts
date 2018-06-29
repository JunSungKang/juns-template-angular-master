import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'jDate'})
export class DatePipe implements PipeTransform {

    /**
    * @description 원하는 날짜가 1년중 몇 주차인지 계산해서 반환
    * @param {*} value 특정 날짜
    * @returns 2017년 10주차인 경우, "10" 반환
    * @since 2017. 11. 13
    * @author jskang(강준성)
    */
    specialDateWeeks(value){
        let initialDate = new Date(value);
        let date = new Date('1/1/'+initialDate.getFullYear()); // Full Date
        let day = initialDate.getDay(); // Day of the week Number

        let flag = true;
        let weeks = 1;

        while(true){
            date = new Date(date.getTime());
            if(date > initialDate){ break; }
            else{
                if(flag){
                    date.setTime(date.getTime() + (6-day)*24*60*60*1000);
                    flag = !flag;
                }else {
                    weeks++;
                    date.setTime(date.getTime() + 7*24*60*60*1000);
                }
            }
        }
        return weeks;
    }

    /**
    * @description new Date()로 생성된 날짜의 포맷을 변경하여 반환
    * @param {*} date new Date()로 생성된 날짜 데이터
    * @returns new Date("20170101")의 포맷인 경우, "2017/01/01" 반환
    * @since 2017. 11. 13
    * @author jskang(강준성)
    */
    dateFormatConvert(value, format){
        value = new Date(value);
        let year = value.getFullYear();
        let month = value.getMonth()+1; if(month < 10) { month = "0" + month; }
        let day = value.getDate(); if(day < 10) { day = "0" + day; }
        let hours = value.getHours();
        let min = value.getMinutes();
        let seconds = value.getSeconds();

        return format.replace("yyyy", year).replace("MM", month).replace("dd", day).replace("hh", hours).replace("mm", min).replace("ss", seconds);
    }

    /* Pipe transform */
    transform(value: number, type: string, format: string) {
        if(type == "YearWeeks"){ return this.specialDateWeeks(value); }
        else if(type == "FormatConvert"){ 
            if(!format){ format = "yyyy/MM/dd hh:mm:ss"; }
            return this.dateFormatConvert(value, format);
        }
    }
}