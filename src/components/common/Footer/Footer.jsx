const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Icons */}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
