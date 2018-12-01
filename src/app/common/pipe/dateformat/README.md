# DateFormat

## USE Manual
- HTML example 1.<br/>
<code> <div>{{ date | dateformat: format }}</div> </code>

- HTML example 2.<br/>
<code> <div>{{ date | dateformat: "yyyy/MM/dd" }}</div> </code>

- COMPONENT<br/>
<code> export class AppComponent { <br/>
  date = new Date(); <br/>
  format = "yyyy/MM/dd" <br/>
}
</code>

- MODULE<br/>
<code>import { BrowserModule } from '@angular/platform-browser'; <br/>
import { NgModule } from '@angular/core'; <br/>
 <br/>
import { AppComponent } from './app.component'; <br/>
import { DateFormatModule } from './common/pipe'; <br/>
 <br/>
@NgModule({ <br/>
  declarations: [ <br/>
    AppComponent <br/>
  ], <br/>
  imports: [ <br/>
    BrowserModule, DateFormatModule <br/>
  ], <br/>
  providers: [], <br/>
  bootstrap: [AppComponent] <br/>
}) <br/>
export class AppModule { } <br/>
</code>