const DropArrow = ({ style }: { style: object }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 82 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <rect
        x="40.9943"
        y="50.3072"
        width="57.9747"
        height="13.1409"
        rx="6.57047"
        transform="rotate(-135 40.9943 50.3072)"
        fill="white"
      />
      <rect
        x="31.7136"
        y="40.9943"
        width="57.9747"
        height="13.1409"
        rx="6.57047"
        transform="rotate(-45 31.7136 40.9943)"
        fill="white"
      />
    </svg>
  );
};

export default DropArrow;
