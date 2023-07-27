import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <input
  #inputSearch
  autofocus
  type="text"
  class="form-control-md"
  placeholder="Search..."
  (keyup)="onSearch(inputSearch.value)"
/>`,
  styles: ['input { width:100%;}']
})
export class FormSearchComponent {
  constructor(private router:Router){}

  onSearch(value: string){
    if(value && value.length > 3){
      this.router.navigate(['/character-list'], {
        queryParams:{q:value}
      })
    }
  }
}
