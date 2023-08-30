const token = ~~[Math.random() * 1234567];
const picture = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("processing token..");
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

function getUser(token, callback) {
    console.log("processing apiKey..");
  if (token)
    setTimeout(() => {
      callback({ apiKey: "xkey123" });
    }, 500);
}

function getPictures(apiKey, callback) {
    console.log("processing pictures now..");
  if (apiKey)
    setTimeout(() => {
      callback({ pic: picture });
    }, 1500);
}

login("nur_aslam", function (response) {
  const { token } = response;
  console.log(token);
  getUser(token, function (response) {
    const { apiKey } = response;
    console.log(apiKey);
    getPictures(apiKey, function (res) {
      const { pic } = res;
      console.log(pic);
    });
  });
});
