import { Book } from './book.class';
import { Follower } from './follower.interface';

export class Collector implements Follower {
  public receiveNotificationIfNeeded(book: Book): string {
    if (book.price < 100) {
      return 'collector is interested';
    }
  }
}
