// 프로미스

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("fail reason");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
}).catch((error) => {
  if (typeof error == "string") {
    console.log(error);
  }
});

// 프로미스 반환 함수 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> { // 추천
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "이거 실화냐",
        content: "미안하다 이거 보여주려고 어그로 끌었다.",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post.id);
});