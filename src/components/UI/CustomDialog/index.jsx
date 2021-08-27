export default function CustomDialog({ children, swiched, toogle }) {
  const toogleDialog = () => {
    toogle();
  };
  return (
    <div
      className={["custom-dialog", swiched ? "custom-dialog--active" : ""].join(
        " "
      )}
    >
      <div onClick={toogleDialog} className="custom-dialog__wrapper">
        <div
          onClick={(e) => e.stopPropagation()}
          className="custom-dialog__content"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
