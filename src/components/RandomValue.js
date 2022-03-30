const randomNum = ["1", "2", "3"];

export function RandomValue() {
  const i = Math.floor(Math.random() * randomNum.length);
  return (
    <p>Your random number is: {randomNum[i]}</p>
  );
}