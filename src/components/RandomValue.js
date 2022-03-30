const randomNum = ["1", "2", "3"];

export function RandomValue() {
  const i = Math.floor(Math.random() * randomNum.length);
  return (
    <div>Your random number is: <div className="random">{randomNum[i]}</div></div>
  );
}