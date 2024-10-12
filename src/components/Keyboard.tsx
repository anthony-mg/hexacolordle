const chars = "0123456789ABCDEF";

function handleClick(event: React.MouseEvent) {
  let text = event.currentTarget.innerHTML;
  text = text.charAt(0).toUpperCase() + text.slice(1);
  const keyboardEvent = new KeyboardEvent("keydown", {
    key: text, // The key value to emit
  });

  window.dispatchEvent(keyboardEvent);
}
const Keyboard = () => {
  return (
    <div className="keyboard">
      {[...chars].map((char, i) => {
        return (
          <div onClick={handleClick} className="key" key={i}>
            {char}
          </div>
        );
      })}
      <div onClick={handleClick} className="key">
        Enter
      </div>
    </div>
  );
};

export default Keyboard;
