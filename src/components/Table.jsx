import React from "react";

const OptionsTable = ({ data }) => {
  return (
    <>
      <table className="cmd-table">
        <tr className="tr-cmd-head">
          {data.titles.map((item, index) => (
            <td className="td-cmd-head">
              <b>{item}</b>
            </td>
          ))}
        </tr>
        {data.items.map((item, index) => (
          <tr className="tr-cmd">
            <td className="td-cmd">
              <code>{item.name}</code>
            </td>
            <td className="td-description">{item.description}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default OptionsTable;
