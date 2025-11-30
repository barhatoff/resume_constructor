type Props = {
  event: () => void;
  title: string;
};

export default function PDFButton({ event, title }: Props) {
  return (
    <button
      onClick={() => event()}
      className="w-12 h-10 absolute right-2 top-2 cursor-pointer 
      border border-solid rounded-xs border-gray-300 text-gray-300 
      hover:bg-emerald-400 hover:text-gray-300 duration-500 
      md:right-10 md:top-10"
    >
      {title}
    </button>
  );
}
