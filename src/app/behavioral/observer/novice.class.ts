import { Book } from './book.class';
import { Follower } from './follower.interface';

export class Novice implements Follower {
  public receiveNotificationIfNeeded(book: Book): string {
    if (book.price < 50) {
      return ', novice received notification';
    }
  }
}
