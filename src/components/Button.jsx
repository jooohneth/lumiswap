import Loader from "./Loader";

export default function Button(props) {
  const { children, loading, valid, onClick } = props;
  return (
    <div className="mt-10 relative flex items-center justify-center">
      <button
        disabled={loading || !valid}
        onClick={onClick}
        className={`${
          valid ? "bg-purple-3 text-off-white" : "text-purple-3 bg-off-white"
        } "border-none outline-none px-16 py-2 font-poppins font-semibold text-medium rounded-2xl leading-[24px] transition-all shadow-lg "`}
      >
        {loading ? <Loader></Loader> : children}
      </button>
    </div>
  );
}
