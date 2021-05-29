import { Book } from './book.class';

export interface Follower {
  receiveNotificationIfNeeded(book: Book): string;
}
