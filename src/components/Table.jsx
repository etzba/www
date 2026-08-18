import React from "react";
import "../styles/table.css";

const OptionsTable = ({ data }) => {
  return (
    <>
      <div className="options">
        <table>
          <thead>
            <tr className="options-head">
              {data.titles.map((item, index) => (
                <td key={index}>
                  <b>{item}</b>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td className="options-name">
                <code>{item.name}</code>
              </td>
              <td className="options-description">{item.description}</td>
              {item.type && <td className="options-type">{item.type}</td>}
              {item.command && <td className="options-type">{item.command}</td>}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OptionsTable;
