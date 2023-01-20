import { useState } from "react"

export const Validation = () => {
  const [name, setName] = useState("Shyam")
  const [email, setEmail] = useState("shyamoffical@gmail.com")
  const [phoneNumber, setPhoneNumber] = useState(12134580)
  const [institute, setInstitute] = useState("Mepco Schlenk")
  const [data, setData] = useState([])
  const [events, setEvents] = useState(["dancing", "mono-act"])
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPhoneError, setIsPhoneError] = useState(false)
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
    if (phoneNumber.length !== 10) {
      setIsPhoneError(true)
    } else {
      setIsPhoneError(false)
    }
    let pattern = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+?\.[a-zA-z]{2,3}/gm
    let validEmail = new RegExp(pattern)
    if (validEmail.test(email)) {
      setIsEmailError(false)
    } else {
      setIsEmailError(true)
    }

    if (isPhoneError && isEmailError) {
      setData(prevState => [
        ...prevState,
        {
          name,
          phoneNumber,
          institute,
          email,
          events,
        },
      ])
    }
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
          <label>Enter your email:</label>
          <input
            type={"text"}
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          ></input>
        </div>
        <div>
          <label>Enter your institute:</label>
          <input
            type={"text"}
            value={phoneNumber}
            onChange={event => {
              setPhoneNumber(event.target.value)
            }}
          ></input>
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
      <div className="error-text">
        <p>{isPhoneError && "Phone number must contain 10 digits"}</p>
        <p>{isEmailError && "Email id is not correct"}</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Insitute</th>
              <th>Events</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={"row-" + index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
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
