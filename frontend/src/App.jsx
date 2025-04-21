import { useState } from "react";
import "./App.css";
import {
  ShortenUrl,
  GetShortenUrl,
  DeleteShortenUrl,
  GetStats,
} from "./api/internel/Url";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const handleButtonClick = async (action) => {
    //alert(action)
    //console.log(`${action} button clicked with text: ${text}`);
    if (action === "Short") {
      if (text != "") {
        let res = await ShortenUrl(text);
        setResult(res.shorterUrl);
      } else {
        setResult("Enter valid url");
      }
    }
    if (action === "Redirect") {
      if (text != "") {
        let res = await GetShortenUrl(text);
        //res.originalUrl
        //console.log(result)
        window.location.href = res.originalUrl;
      }
      else{
        setResult("Enter valid url");
      }
    }
    if (action === "Delete") {

      if(text != ''){
      let res = await DeleteShortenUrl(text);
      //res.originalUrl
      //console.log(res)
      setResult(res.message ? res.message : "Deleted Successfully");
      }
      else{
        setResult("Enter valid url")
      }
    }
    if (action === "Get Stats") {
      if(text != ''){
      let res = await GetStats(text);
      //res.originalUrl
      console.log(res);
      setResult("Accessed Times: " + res[0].accessCount);
      }
      else{
        setResult("Enter valid url");
      }
    }
  };

  const containerStyle = {
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    padding: "32px",
    width: "100%",
    maxWidth: "400px",
  };

  const textareaStyle = {
    width: "80%",
    height: "60px",
    padding: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    resize: "none",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const textareaFocusStyle = {
    borderColor: "#2563eb",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.2)",
  };

  const buttonContainerStyle = {
    marginTop: "24px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  };

  const buttonStyle = {
    padding: "10px 24px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1d4ed8",
    transform: "scale(1.05)",
  };

  const buttonActiveStyle = {
    backgroundColor: "#1e40af",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <textarea
            style={textareaStyle}
            onFocus={(e) => Object.assign(e.target.style, textareaFocusStyle)}
            onBlur={(e) =>
              Object.assign(e.target.style, {
                borderColor: "#d1d5db",
                boxShadow: "none",
              })
            }
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the link"
          />
          <div style={buttonContainerStyle}>
            {["Short", "Redirect", "Delete", "Get Stats"].map((action) => (
              <button
                key={action}
                onClick={() => handleButtonClick(action)}
                style={buttonStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, buttonHoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, {
                    backgroundColor: "#2563eb",
                    transform: "scale(1)",
                  })
                }
                onMouseDown={(e) =>
                  Object.assign(e.target.style, buttonActiveStyle)
                }
                onMouseUp={(e) =>
                  Object.assign(e.target.style, buttonHoverStyle)
                }
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>{result === "" ? null : <p>Result: {result}</p>}</div>
    </>
  );
}

export default App;
