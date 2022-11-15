import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ListButton = ({ content }: { content: string }) => {
  return (
    <li>
      <button className="my-3 hover:bg-white/10 block w-full px-2 py-[0.2rem] text-left rounded transition">
        {content}
      </button>
    </li>
  );
};

const IconButton = () => {
  return (
    <li>
      <button className="flex my-3 hover:bg-white/10 block w-full px-1 py-[0.3rem] text-left rounded transition">
        <svg
          width="23"
          height="23"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[0.1rem]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7812 2.5625C26.1988 2.5625 30.4353 4.31735 33.559 7.441C36.6827 10.5647 38.4375 14.8012 38.4375 19.2188C38.4375 23.6363 36.6827 27.8728 33.559 30.9965C30.4353 34.1202 26.1988 35.875 21.7812 35.875C17.3637 35.875 13.1272 34.1202 10.0035 30.9965C6.87985 27.8728 5.125 23.6363 5.125 19.2188C5.125 14.8012 6.87985 10.5647 10.0035 7.441C13.1272 4.31735 17.3637 2.5625 21.7812 2.5625V2.5625ZM34.3221 12.8125C32.6787 9.61708 29.882 7.16581 26.4988 5.95525C27.6366 8.10775 28.4591 10.414 28.9409 12.8125H34.3221ZM35.8135 20.4872C35.8545 20.0656 35.875 19.6423 35.875 19.2188C35.8724 17.9184 35.6887 16.6247 35.3292 15.375H29.3278C29.4098 16.2232 29.4688 17.0765 29.4688 17.9375C29.4635 19.6591 29.2866 21.3759 28.9409 23.0625H35.3292C35.5726 22.2194 35.7341 21.3584 35.8161 20.4872H35.8135ZM26.7551 20.4872L26.7704 20.3565C26.8579 19.5531 26.9032 18.7457 26.9062 17.9375C26.889 17.0804 26.824 16.2249 26.7115 15.375H16.851C16.7375 16.2248 16.6725 17.0803 16.6562 17.9375C16.6625 19.6628 16.8628 21.382 17.2533 23.0625H26.3092C26.5065 22.2118 26.6551 21.3533 26.7551 20.4872V20.4872ZM26.2631 12.8125C25.6593 10.1023 24.5698 7.52379 23.0471 5.20187C22.6269 5.166 22.2066 5.125 21.7812 5.125C21.5143 5.1263 21.2476 5.13913 20.9817 5.16344L20.5154 5.20187L20.5 5.2275C18.9854 7.54262 17.9011 10.1122 17.2994 12.8125H26.2631ZM14.6216 12.8125C15.1131 10.4157 15.9468 8.10195 17.097 5.94244C13.6991 7.14886 10.8892 9.60586 9.24037 12.8125H14.6216V12.8125ZM8.23331 15.375C7.87429 16.6248 7.69059 17.9184 7.6875 19.2188C7.69059 20.5191 7.87429 21.8127 8.23331 23.0625H14.6216C14.2742 21.3762 14.0974 19.6592 14.0938 17.9375C14.0938 17.0765 14.1527 16.2232 14.2347 15.375H8.23331ZM15.2904 25.625H9.24294C10.2116 27.5171 11.5946 29.1663 13.289 30.4499C14.9833 31.7334 16.9454 32.6182 19.0291 33.0383C17.3891 30.7863 16.1264 28.2825 15.2904 25.625ZM21.7812 32.4003C23.4198 30.3736 24.7006 28.0824 25.5686 25.625H17.9939C18.8619 28.0823 20.1427 30.3736 21.7812 32.4003ZM28.2721 25.625C27.4361 28.2825 26.1734 30.7863 24.5334 33.0383C26.6169 32.6178 28.5789 31.7329 30.2732 30.4494C31.9675 29.1659 33.3506 27.5169 34.3196 25.625H28.2721V25.625Z"
            fill="white"
          />
        </svg>
        <div className="ml-2 mt-[-0.15rem]">
          <span>United States</span>
          <br />
          <span className="opacity-60">English</span>
        </div>
      </button>
    </li>
  );
};

const SideNavbar = ({ setSideNavbar }: { setSideNavbar: Function }) => {
  return (
    <div className="flex fixed w-full h-full text-white z-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed w-full h-full backdrop-blur bg-[#000]/20"
        onClick={() => setSideNavbar(false)}
      />
      <motion.div
        initial={{ opacity: 0, right: -10 }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ boxShadow: "-5px 0px 20px 2px rgba(0, 0, 0, 0.4)" }}
        className="flex absolute flex-col justify-start w-full sm:w-[17rem] h-full bg-black shadow z-50"
      >
        <button
          className="self-end mt-8 mr-8 hover:bg-white/10 rounded transition"
          onClick={() => setSideNavbar(false)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
              fill="white"
            />
          </svg>
        </button>
        <ul className="mt-10 sm:mt-20 mx-8">
          <div className="block lg:hidden">
            <Link
              className="my-3 hover:bg-white/10 block w-full px-2 py-[0.2rem] text-left rounded underline transition "
              to="/tickets"
              onClick={() => setSideNavbar(false)}
            >
              Tickets
            </Link>
            <Link
              className="my-3 hover:bg-white/10 block w-full px-2 py-[0.2rem] text-left rounded underline transition "
              to="/about_us"
              onClick={() => setSideNavbar(false)}
            >
              About Us
            </Link>
          </div>
          <ListButton content="Starports" />
          <ListButton content="Inventory" />
          <ListButton content="Check-In" />
          <ListButton content="Insurance" />
          <ListButton content="Horizon" />
          <ListButton content="Equipment" />
          <ListButton content="Resorts" />
          <ListButton content="Apartments" />
          <ListButton content="Star Gates" />
          <ListButton content="Support" />
          <ListButton content="Investor Relations" />
          <IconButton />
        </ul>
      </motion.div>
    </div>
  );
};

export default SideNavbar;
