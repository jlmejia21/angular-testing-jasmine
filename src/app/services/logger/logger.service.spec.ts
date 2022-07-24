import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService],
    });

    service = TestBed.inject(LoggerService);
  });

  it('should not have any messages at starting', () => {
    let count = service.messages.length;
    expect(count).toBe(0);
  });

  it('should add the messages when log is called', () => {
    service.log('message');
    let count = service.messages.length;
    expect(count).toBe(1);
  });

  it('should clear all the messages when clear is called', () => {
    service.log('message');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
