// 인덱스드 엑세스 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    email: string;
  };
}[];

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name} - $${author.id}`);
}

const post: PostList[number] = {
  title: "어서와",
  content: "처음이지?",
  author: {
    id: 1,
    name: "민욱",
    email: "e@a.c",
  },
}

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // error
type TupNum = Tup[number];