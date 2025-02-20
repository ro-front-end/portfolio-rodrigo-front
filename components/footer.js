import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-around items-center opacity-70">
      <div className="text-center py-4 opacity-50">
        &copy; {new Date().getFullYear()} Rodrigo Arellano
      </div>
      <nav>
        <ul className="flex items-center gap-4 text-lg">
          <li>
            <a
              href="https://www.linkedin.com/in/rodrigo-arellano-ganem/"
              target="_blank"
            >
              <FaLinkedin className="text-gray-500 hover:text-blue-400 active:text-blue-300" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/rock_front_end/" target="_blank">
              <FaInstagram className="text-gray-500 hover:text-rose-400 active:text-rose-300" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
