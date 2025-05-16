// Pick<T, K>
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // "title" | "content" extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "고전",
  content: "옛글",
};

// Omit
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>>

const noTitlePost: Omit<Post, "title"> = {
  content: "고",
  tags: [],
  thumbnailURL: "글",
}

// record
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string, size: number }>;