export default ({ href , d }) => {



    return (
        <a
        href={href ?? "#!"}
        type="button"
        className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-gray-800 focus:outline-none focus:ring-0"
        data-twe-ripple-init>
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
            <path
              d={d} />
          </svg>
        </span>
      </a>
    )
}