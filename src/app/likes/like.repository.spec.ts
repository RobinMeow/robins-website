import { TestBed } from '@angular/core/testing';

import { LikeRepository } from './like.repository';

describe('LikeRepositoryService', () => {
  let service: LikeRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
