import "./project.css";

import React from 'react'

const Feedback = () => {
  return (
    <div class="feedback" id="3">
    <h1>Feedback</h1>
    <div class="formss">
      <form>
        <table>
          <tr>
            <td>
              <label>Your Name: </label>{" "}
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label> Your Feedback: </label>
            </td>
            <td>
              <textarea id="textareaa"> </textarea>
            </td>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: "center" }}>
              <button id="send">Send</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
  )
}

export default Feedback
