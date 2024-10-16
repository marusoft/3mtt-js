// console.log("Hello promise and async , await")

let endPoint = "https://fakestoreapi.com/user";

const fetchData = async () => {
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    //  console.log(res)
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
