import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import "./CustomNode.css";
import Switch from "./Switch";
export default memo(({ data, isConnectable }) => {
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((isEditing) => !isEditing);
  };
  return (
    <div className="customNode">
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />

      <div className="mainblock">
        <button className="editbutton" onClick={handleEditClick}>
          Edit
        </button>
        {data.label}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
      {isEditing && (
        <div className="detailview">
          <Switches />
        </div>
      )}
      {/* <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      /> */}
    </div>
  );
});

function Switches() {
  // function App() {
  //   return (
  //     <div className="App">
  //       <div style={{ display: 'inline-block' }}>
  //         <Switch/> <span> SHEESH </span>
  //       </div>

  //     </div>
  //   );
  // }

  const [isCheckedAddress, setIsCheckedAddress] = useState(false);
  const [isCheckedHost, setIsCheckedHost] = useState(false);
  const [isCheckedConnection, setIsCheckedConnection] = useState(false);
  const [isCheckedClient, setIsCheckedClient] = useState(false);
  const [isCheckedUserAgent, setIsCheckedUserAgent] = useState(false);

  const handleSwitchChange = (id, isChecked) => {
    switch (id) {
      case "address_":
        setIsCheckedAddress(isChecked);
        break;
      case "host_":
        setIsCheckedHost(isChecked);
        break;
      case "connection_":
        setIsCheckedConnection(isChecked);
        break;
      case "client_":
        setIsCheckedClient(isChecked);
        break;
      case "user-agent_":
        setIsCheckedUserAgent(isChecked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Switches">
      <div className="switch-box">
        <Switch
          id="address_"
          label="Address?"
          onChange={(isChecked) => handleSwitchChange("address_", isChecked)}
          isChecked={isCheckedAddress}
          //   description="The address of the server."
        />

        <Switch
          id="host_"
          label="Host"
          onChange={(isChecked) => handleSwitchChange("host_", isChecked)}
          isChecked={isCheckedHost}
          //   description="The host of the server."
        />

        <Switch
          id="connection_"
          label="Connection"
          onChange={(isChecked) => handleSwitchChange("connection_", isChecked)}
          isChecked={isCheckedConnection}
          //   description="Connection Status"
        />

        <Switch
          id="client_"
          label="Client"
          onChange={(isChecked) => handleSwitchChange("client_", isChecked)}
          isChecked={isCheckedClient}
          //   description="Client Status"
        />

        <Switch
          id="user-agent_"
          label="User-Agent"
          onChange={(isChecked) => handleSwitchChange("user-agent_", isChecked)}
          isChecked={isCheckedUserAgent}
          //   description="User-Agent Status"
        />
      </div>
    </div>
  );
}
