export const Arrow = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="100%" 
      height="100%" 
      fill="#ffffff" 
      className="hover:scale-105 transition-transform duration-200"
    >
      <defs>
        <style>{`.cls-1{fill:#ffffff;}`}</style>
      </defs>
      <path
        className="cls-1" 
        d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM12,2A10,10,0,1,1,2,12,10.011,10.011,0,0,1,12,2Z"
      />
      <path
        className="cls-1" 
        d="M6,13h9.586l-2.293,2.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414l-4-4a1,1,0,1,0-1.414,1.414L15.586,11H6a1,1,0,0,0,0,2Z"
      />
    </svg>
  );
}