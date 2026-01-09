function ShowTime() {
  let time = new Date().toLocaleTimeString("en-BD", { timeZone: "Asia/Dhaka" });

  return (
    <div>
      <h4 className="mt-clock-time">{time}</h4>
    </div>
  );
}

export default ShowTime;
