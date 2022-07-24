import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}

  add(n1: number, n2: number) {
    this.loggerService.log('Add Operation is called');
    return n1 + n2;
  }
  subtract(n1: number, n2: number) {
    this.loggerService.log('Subtract Operation is called');
    return n1 - n2;
  }
}
