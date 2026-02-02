export const initialNovel = {
  id: 0,
  title: "",
  author: "",
  publishedDate: new Date(),
  available: false,
  gid: 0,
  genreName: "",
  rating: 0,
  email: "",
};

export type Novel = {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;
  available: boolean;
  gid: number;
  genreName: string;
  rating: number;
  email: string;
};

export type BookPost = Omit<Novel, "id">;
