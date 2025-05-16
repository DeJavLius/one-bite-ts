// Partial
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목",
  content: "내용을 입력해주세요"
};

// Required<T>
type Required<T> = {
  [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
  title: "제목",
  tags: ["ts"],
  content: "내용을 입력해주세요",
  thumbnailURL: "https://",
}

// Readonly<T>
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
  title: "보호게시글",
  tags: [""],
  content: "",
  thumbnailURL: "",
}

// readonlyPost.content = "";