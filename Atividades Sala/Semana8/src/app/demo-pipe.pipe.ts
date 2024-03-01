import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {

  transform(valor: string): string {

    return valor.replace(/\b\w/g, char => char.toUpperCase);
  }

}
