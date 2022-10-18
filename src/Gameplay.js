function Gameplay() {
  console.log("gameplay");
}

function recordClickLocation(e) {}

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

function placeTarget(targetToggle, setTargetToggle, clickLocation) {
  console.log(clickLocation);

  if (targetToggle) {
    return (
      <div
        className="targetLayer"
        style={{ left: clickLocation[0] + "%", top: clickLocation[1] + "%" }}
      >
        <div className="target"></div>
        <div
          className="selector"
          onClick={(e) => {
            targetToggle ? setTargetToggle(false) : setTargetToggle(true);
          }}
        >
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
}

export { Gameplay, recordClickLocation, placeTarget };
