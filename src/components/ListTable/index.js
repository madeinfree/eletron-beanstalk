import React, { Component } from 'react';

class ListTable extends Component {
  constructor() {
    super();
  }

  render() {
    const { tailList } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">EC2InstanceId</th>
              <th className="text-center">Message</th>
              <th className="text-center">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {tailList.map((tail, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">${tail.Ec2InstanceId}</td>
                  <td className="text-center">
                    <a target="_blank" href={tail.Message}>
                      {tail.Message.slice(0, 25)}....
                    </a>
                  </td>
                  <td className="text-center">
                    {tail.SampleTimestamp.toString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTable;
