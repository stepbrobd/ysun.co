import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";

const ThemeSwitch = () => {
  const [isMounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const changeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!isMounted)
    return (
      <>
        <Head>
          {resolvedTheme === "light" ? (
            <meta
              name="theme-color"
              content="#f5f5f5"
              media="(prefers-color-scheme: light)"
            />
          ) : (
            <meta
              name="theme-color"
              content="#171717"
              media="(prefers-color-scheme: dark)"
            />
          )}
        </Head>
        <div
          className="h-[50px] min-h-[50px] w-[30px] min-w-[30px]"
          aria-label="Theme Switch"
        />
      </>
    );
  else
    return (
      <>
        <Head>
          {resolvedTheme === "light" ? (
            <meta
              name="theme-color"
              content="#f5f5f5"
              media="(prefers-color-scheme: light)"
            />
          ) : (
            <meta
              name="theme-color"
              content="#171717"
              media="(prefers-color-scheme: dark)"
            />
          )}
        </Head>
        <div
          className="container flex h-[50px] min-h-[50px]
                    w-[30px] min-w-[30px] items-center justify-center"
        >
          <button
            className="light-mode-border-color     hover:light-mode-bg-action-color     active:light-mode-bg-action-color
                         dark:dark-mode-border-color dark:hover:dark-mode-bg-action-color dark:active:dark-mode-bg-action-color
                         flex h-[30px] w-[30px] items-center justify-center
                         rounded-md border focus:outline-none"
            onClick={changeTheme}
            aria-label="Theme Switch"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              {resolvedTheme === "light" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21.64 13C21.4957 12.8807 21.3207 12.8043 21.1351 12.7796C20.9494 12.7548 20.7606 12.7827 20.59 12.86C19.5326 13.3439 18.3829 13.593 17.22 13.59C15.0689 13.5874 13.006 12.7345 11.4812 11.2171C9.95632 9.69979 9.09321 7.64114 9.08001 5.49003C9.08457 4.81586 9.16848 4.14458 9.33001 3.49003C9.36429 3.31557 9.35143 3.13512 9.29277 2.96728C9.2341 2.79944 9.13175 2.65028 8.99626 2.53516C8.86076 2.42004 8.69702 2.34313 8.52191 2.31234C8.3468 2.28156 8.16665 2.29802 8.00001 2.36003C6.43234 3.06494 5.06958 4.15679 4.03977 5.53301C3.00996 6.90924 2.34689 8.52465 2.11286 10.2275C1.87883 11.9304 2.08152 13.6648 2.70188 15.2678C3.32225 16.8708 4.33993 18.2898 5.65931 19.3915C6.9787 20.4932 8.55649 21.2414 10.2445 21.5658C11.9324 21.8903 13.6752 21.7803 15.309 21.2463C16.9428 20.7122 18.414 19.7716 19.5844 18.5128C20.7548 17.254 21.5861 15.7183 22 14.05C22.0504 13.859 22.0431 13.6574 21.9791 13.4705C21.915 13.2836 21.797 13.1199 21.64 13ZM12.14 19.69C10.4618 19.6782 8.82821 19.1479 7.46301 18.1718C6.0978 17.1956 5.06768 15.8214 4.5137 14.2372C3.95971 12.6529 3.90895 10.9362 4.36835 9.32203C4.82776 7.70785 5.77487 6.27513 7.08001 5.22003V5.49003C7.08266 8.17851 8.15183 10.7561 10.0529 12.6572C11.9539 14.5582 14.5315 15.6274 17.22 15.63C17.9259 15.6326 18.63 15.5589 19.32 15.41C18.6299 16.7155 17.5965 17.8079 16.3312 18.5692C15.0659 19.3305 13.6167 19.7319 12.14 19.73V19.69Z"
                  stroke="none"
                  fill="dimgray"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5.64 17L4.93 17.71C4.74375 17.8974 4.63921 18.1508 4.63921 18.415C4.63921 18.6792 4.74375 18.9326 4.93 19.12C5.11736 19.3063 5.37081 19.4108 5.635 19.4108C5.89919 19.4108 6.15264 19.3063 6.34 19.12L7.05 18.41C7.21383 18.2187 7.29943 17.9726 7.28971 17.7209C7.27999 17.4693 7.17566 17.2305 6.99756 17.0524C6.81947 16.8743 6.58073 16.77 6.32905 16.7603C6.07738 16.7506 5.8313 16.8362 5.64 17ZM5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12ZM12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5ZM5.64 7.05C5.82626 7.23474 6.07766 7.3389 6.34 7.34C6.47161 7.34076 6.60207 7.31554 6.72391 7.26577C6.84574 7.21601 6.95656 7.14268 7.05 7.05C7.23625 6.86264 7.34079 6.60919 7.34079 6.345C7.34079 6.08081 7.23625 5.82736 7.05 5.64L6.34 4.93C6.1487 4.76617 5.90262 4.68057 5.65095 4.69029C5.39927 4.70001 5.16053 4.80434 4.98244 4.98244C4.80434 5.16053 4.70001 5.39927 4.69029 5.65095C4.68057 5.90262 4.76617 6.1487 4.93 6.34L5.64 7.05ZM17.64 7.34C17.9023 7.3389 18.1537 7.23474 18.34 7.05L19.05 6.34C19.1547 6.25035 19.2397 6.14004 19.2997 6.01597C19.3597 5.89191 19.3935 5.75677 19.3988 5.61905C19.4041 5.48133 19.3809 5.344 19.3306 5.21568C19.2804 5.08735 19.2041 4.9708 19.1066 4.87335C19.0092 4.77589 18.8926 4.69964 18.7643 4.64936C18.636 4.59909 18.4987 4.57588 18.3609 4.5812C18.2232 4.58652 18.0881 4.62025 17.964 4.68027C17.84 4.7403 17.7296 4.82532 17.64 4.93L17 5.64C16.8137 5.82736 16.7092 6.08081 16.7092 6.345C16.7092 6.60919 16.8137 6.86264 17 7.05C17.1763 7.22536 17.4116 7.32875 17.66 7.34H17.64ZM21 11H20C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19ZM18.36 17C18.17 16.8943 17.9508 16.8534 17.7355 16.8835C17.5202 16.9136 17.3205 17.0131 17.1668 17.1668C17.0131 17.3205 16.9136 17.5202 16.8835 17.7355C16.8534 17.9508 16.8943 18.17 17 18.36L17.71 19.07C17.8974 19.2563 18.1508 19.3608 18.415 19.3608C18.6792 19.3608 18.9326 19.2563 19.12 19.07C19.3063 18.8826 19.4108 18.6292 19.4108 18.365C19.4108 18.1008 19.3063 17.8474 19.12 17.66L18.36 17ZM12 6.5C10.9122 6.5 9.84883 6.82257 8.94436 7.42692C8.03989 8.03126 7.33494 8.89025 6.91866 9.89524C6.50238 10.9002 6.39346 12.0061 6.60568 13.073C6.8179 14.1399 7.34172 15.1199 8.11091 15.8891C8.8801 16.6583 9.86011 17.1821 10.927 17.3943C11.9939 17.6065 13.0998 17.4976 14.1048 17.0813C15.1098 16.6651 15.9687 15.9601 16.5731 15.0556C17.1774 14.1512 17.5 13.0878 17.5 12C17.4974 10.5421 16.917 9.14471 15.8862 8.11383C14.8553 7.08295 13.4579 6.50264 12 6.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5Z"
                  stroke="none"
                  fill="white"
                />
              )}
            </svg>
          </button>
        </div>
      </>
    );
};

export default ThemeSwitch;
