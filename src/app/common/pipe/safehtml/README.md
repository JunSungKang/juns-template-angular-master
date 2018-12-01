# DateFormat

## USE Manual
- HTML example 1.<br/>
<code> <div>{{ date | safehtml }}</div> </code>

- HTML example 2.<br/>
<code> <div [innerHTML]=" html | safehtml "></div> </code>

- MODULE<br/>
<code>import { NgModule } from '@angular/core'; <br/>
import { CommonModule } from '@angular/common'; <br/>
import { FormboxComponent } from './formbox.component'; <br/>
 <br/>
import { SafehtmlModule } from '../../pipe' <br/>
 <br/>
@NgModule({ <br/>
  declarations: [FormboxComponent], <br/>
  imports: [ <br/>
    CommonModule, SafehtmlModule <br/>
  ], <br/>
  exports: [ FormboxComponent ] <br/>
}) <br/>
export class FormboxModule { } <br/>

</code>