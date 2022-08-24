# 倒计时

```ts
function CountDown({ max }) {
  const [time, setTime] = React.useState(0)
  const [timerID, setTimerID] = React.useState(null)

  const sendMsg = () => {
    setTime(max)
    if (!time) {
      const timerID = setInterval(() => {
        setTime(preTime => {
          return preTime - 1
        })
      }, 1000)
      setTimerID(timerID)
    }
  }

  React.useEffect(() => {
    console.log(time)
    if (!time && timerID) {
      console.log('clear')
      clearInterval(timerID)
    }
  }, [time])

  return (
    <div>
      <button onClick={sendMsg}>{time <= 0 ? '发送验证码' : `${time}s`}</button>
    </div>
  )
}
```
