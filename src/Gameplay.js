function Gameplay() {
  console.log("gameplay");
}

function recordClickLocation(e) {
  console.log("recordClicks");
  console.log(e.pageX);
  console.log(e.pageY);
}

function dropTarget(e) {
  return (
    <div className="targetLayer">
      <div className="target">TARGET</div>
      <div className="selector">
        <div>
          <p>Waldo</p>
        </div>
        <div>
          <p>Wizard</p>
        </div>
      </div>
    </div>
  );
}

export { Gameplay, recordClickLocation, dropTarget };
