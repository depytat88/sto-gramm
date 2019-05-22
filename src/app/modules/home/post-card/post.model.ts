export class PostModel {
  constructor(
    readonly authorName:  string,
    readonly postPlace: string,
    readonly photoUrl: string,
    readonly liked = false,
    readonly addedToSaved = false,
    readonly likes: number,
    readonly description: string,
    readonly hashtags: string[],
    readonly date: string,
  ) {
  }
}
