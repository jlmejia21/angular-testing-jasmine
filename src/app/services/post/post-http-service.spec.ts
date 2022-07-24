import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';

describe('postService (HttpClientTestingModule)', () => {
  let postService: PostService;
  let httpTestingController: HttpTestingController;
  let POSTS = [
    {
      id: 1,
      body: 'body 1',
      title: 'Title 1',
    },
    {
      id: 2,
      body: 'body 2',
      title: 'Title 2',
    },
    {
      id: 3,
      body: 'body 3',
      title: 'Title 3',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule],
    });

    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('getPosts()', () => {
    it('should return posts when getPosts() is called', (done) => {
      postService.getPosts().subscribe((data) => {
        expect(data).toEqual(POSTS);
        done();
      });
      const request = httpTestingController.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      request.flush(POSTS);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('getPost()', () => {
    it('should return single post whe getPost is called with postId', () => {
      postService.getPost(1).subscribe();
      // postService.getPost(2).subscribe();
      const request = httpTestingController.expectOne(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      expect(request.request.method).toBe('GET');
      // httpTestingController.verify();
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
