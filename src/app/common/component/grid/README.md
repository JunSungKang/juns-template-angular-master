# Grid

## USE Manual
- HTML example 1.<br/>
<code><juns-grid class="col-12" [styleOptions]="styleOptions" [data]="data"></juns-grid>
</code>

- HTML example 2.<br/>
<code><juns-grid class="col-12" [data]="data"></juns-grid>
</code>

- TYPESCRIPT<br/>
<code> data = { <br/>
    "th": ["A", "B", "C", "D", "E", "F", "G"], <br/>
    "tr": [ <br/>
      [1,1,1,1,1,1,1], <br/>
      [2,2,2,2,2,2,2], <br/>
      [3,3,3,3,3,3,3], <br/>
      [4,4,4,4,4,4,4] <br/>
    ] <br/>
  } <br/>
 <br/>
  styleOptions = { <br/>
    "borderWeight": 2, <br/>
    "table": { <br/>
      "width": "100%" <br/>
    }, <br/>
    "th": { <br/>
      "text-align": "center", <br/>
      "background": "lightyellow" <br/>
    }, <br/>
    "tr": { <br/>
      "text-align": "center", <br/>
      "background": "white" <br/>
    } <br/>
  } <br/>
</code>

Tip. A grid designed in JunsTemplate is applied by default without entering the CSS inserted in "styleOptions".