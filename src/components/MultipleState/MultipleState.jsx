import { useState } from "react"

export const MultipleState = () => {
  const [name, setName] = useState("Shyam")
  const [institute, setInstitute] = useState("Mepco Schlenk")
  const [data, setData] = useState([])
  const [events, setEvents] = useState(["dancing", "mono-act"])
  const eventOptions = [
    {
      key: "dancing",
      value: "dancing",
    },
    {
      key: "drama",
      value: "drama",
    },
    {
      key: "mono-act",
      value: "mono-act",
    },
    {
      key: "singing",
      value: "singing",
    },
  ]
  const handleSubmit = event => {
    event.preventDefault()
    setData(prevState => [
      ...prevState,
      {
        name: name,
        institute: institute,
        events: events,
      },
    ])
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your Name:</label>
          <input
            type="text"
            value={name}
            onChange={event => {
              setName(event.target.value)
            }}
          />
        </div>
        <div>
          <label>Enter your institute:</label>
          <input
            type={"text"}
            value={institute}
            onChange={event => {
              setInstitute(event.target.value)
            }}
          ></input>
        </div>
        <div>
          <select
            multiple
            value={events}
            onChange={event => {
              const values = [...event.target.selectedOptions].map(option => option.value)
              setEvents(values)
              console.log(values)
            }}
          >
            {eventOptions.map(event => (
              <option value={event.value} key={event.key}>
                {" "}
                {event.value}
              </option>
            ))}
            {/* {eventOptions.map(event => {
            return <option>{event.value}</option>
          })} */}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Insitute</th>
              <th>Events</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={"row-" + index}>
                <td>{data.name}</td>
                <td>{data.institute}</td>
                <td>{data.events.join(",")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
