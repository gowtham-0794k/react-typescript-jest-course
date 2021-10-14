import clsx from "clsx";

function Button({ label }: any) {
  const classes = clsx(
    {
      "w-full": true,
    },
    {
      "hover:bg-gray-100 border-2 border-gray-200": true,
    }
  );
  return (
    <div>
      <button className={classes}>{label}</button>
    </div>
  );
}

export default Button;
