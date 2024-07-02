import React from 'react';
import './RequestTable.css';


const RequestTable = () => {
  return (
    <div className="request-table">
      <h3>Requests</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Req. ID</th>
            <th>Req. Status</th>
            <th>Req. Type</th>
            <th>Req. Time</th>
            <th>Content Type</th>
            <th>IP Address</th>
            <th>OS</th>
            <th>User Agent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Req-1</td>
            <td>200</td>
            <td>GET</td>
            <td>2024-06-28 22:11:01</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Req-2</td>
            <td>200</td>
            <td>GET</td>
            <td>2024-06-28 22:11:01</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Req-3</td>
            <td>200</td>
            <td>GET</td>
            <td>2024-06-28 22:11:01</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Req-4</td>
            <td>200</td>
            <td>GET</td>
            <td>2024-06-28 22:11:01</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Req-4</td>
            <td>200</td>
            <td>GET</td>
            <td>2024-06-28 22:11:01</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTable;
