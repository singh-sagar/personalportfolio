// components/SocialButton.js
const SocialButton = ({ path, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white p-3 rounded-xl flex items-center justify-center hover:scale-110 duration-200 cursor-pointer w-12 h-12"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d={path} />
      </svg>
    </a>
  );
};

export default SocialButton;
