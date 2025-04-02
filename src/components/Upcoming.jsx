import React from "react";
function Upcoming(){

    return(
        <section id="calendar" className="content-section">
        <div className="temp">
            <h2>Calendar</h2>
            <p>Check out our schedule of upcoming meetings, events, and workshops!</p>
            <table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>November</td>
                <td>Introductory event</td>
            </tr>
            <tr>
                <td>November</td>
                <td>TinkerCAD</td>
            </tr>
            <tr>
                <td>December</td>
                <td>Circuit X</td>
            </tr>
            <tr>
                <td>January</td>
                <td>Armanium (STM32)</td>
            </tr>
            <tr>
                <td>February</td>
                <td>Web Development Workshop</td>
            </tr>
            <tr>
                <td>February</td>
                <td>Recruitment Drive (1st and 3rd Semester Students)</td>
            </tr>
            </tbody>
            </table>
        </div>
    </section>

    )
}
export default Upcoming;