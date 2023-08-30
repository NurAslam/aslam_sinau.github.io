const token = ~~[Math.random() * 1234567];
const picture = ["1.jpg", "2.jpg", "3.jpg"];


function login(username) {
  console.log("processing token..");
  return new Promise((success, failed) => {
    //memiliki 2 parameter
    setTimeout(() => {
      if (username != "nur_aslam") failed("Maaf Salah data");
      success({ token });
    }, 200);
  });
}

function getUser(token) {
  console.log("processing apiKey..");
  return new Promise((success, failed) => {
    if (!token) failed("Soryy, no token. Cannot Access");
    setTimeout(() => {
      success({ apiKey: "xkey123" });
    }, 500);
  });
}

function getPictures(apiKey) {
  console.log("processing pictures now..");
  return new Promise((success, failed) => {
    if (!apiKey) failed("Sorry your data cannot open");
    setTimeout(() => {
      success({ pic: picture });
    }, 1500);
  });
}

async function displayData() {
  const { token } = await login("nur_aslam");
  const { apiKey } = await getUser(token);
  const { pic } = await getPictures(apiKey);

  
  console.log(`
    token anda adalah ${token} dengan APIKEY ${apiKey} mendapatakn hasil picture ${pic}
  `);
}
displayData();
