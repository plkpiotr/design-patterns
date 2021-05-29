import { Follower } from './follower.interface';

export class Book {
  public price: number;
  private followers: Follower[] = [];

  public follow(follower: Follower): string {
    const isFollower = this.followers.includes(follower);
    if (isFollower) {
      return 'follower has been followed book';
    }
    this.followers.push(follower);
    return 'follower started following book';
  }

  public unfollow(follower: Follower): string {
    const followerIndex = this.followers.indexOf(follower);
    if (followerIndex === -1) {
      return 'there is no such follower';
    }
    this.followers.splice(followerIndex, 1);
    return 'follower stopped following book';
  }

  public changePrice(price: number): string {
    this.price = price;
    return this.notifyFollowers();
  }

  private notifyFollowers(): string {
    let summary = '';
    for (const follower of this.followers) {
      summary += follower.receiveNotificationIfNeeded(this) ?? '';
    }
    return summary;
  }
}
