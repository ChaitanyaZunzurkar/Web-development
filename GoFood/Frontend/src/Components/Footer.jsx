import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="text-center text-white p-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
        © 2024 Copyright : 
        <Link className="text-white px-2" href="https://google.com/">
            Go Food
        </Link>
      </div>
    </footer>
  );
};
