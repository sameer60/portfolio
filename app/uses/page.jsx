/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const Uses = () => {
  return (
    <section className="h-full body-font bg-base-100">
      <div className="container px-5 py-24 mx-auto">
        <h1 className=" text-center text-3xl md:text-5xl font-bold tracking-tight">
          Uses
        </h1>
        <p className="max-w-4xl mx-auto my-6 text-center text-lg text-balance">
          After shamelessly taking the idea from Wes Bos's{" "}
          <Link
            href="https://uses.tech/"
            target="_blank"
            className="underline font-semibold"
          >
            uses.tech
          </Link>
          . I made a page where I list the stuff I use every day. I enjoy seeing
          what others use, so I added this for anyone curious about it.
        </p>
        <div className="flex justify-center w-full mb-16">
          <img
            className="rounded-2xl object-cover lg:h-96 h-60 md:h-72"
            src="https://res.cloudinary.com/didtdrgsj/image/upload/v1713576040/neofetch_wzy0xw.jpg"
            alt="neofetch"
          />
        </div>
        <div className="flex items-center lg:w-4/5 mx-auto bg-neutral shadow-lg rounded-3xl p-10 mb-10 sm:flex-row flex-col">
          <div className="w-48 h-auto sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image height={160} width={160} src="files.svg" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold text-balance tracking-tight">
              Operating System
            </h2>
            <ul className="list-disc list-inside">
              <li className="">
                <Link
                  href="https://ubuntu.com/download/desktop"
                  className="font-semibold underline"
                  target="_blank"
                >
                  Ubuntu
                </Link>
              </li>
              <li className="font-semibold">
                Desktop Environment: <span className="font-medium">Gnome</span>
              </li>
              <li className="">
                <span className="font-semibold">
                  Themes:{" "}
                  <span>
                    <Link
                      href="https://www.gnome-look.org/p/1403328"
                      target="_blank"
                      className="underline font-medium"
                    >
                      Whitesur Dark,
                    </Link>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center lg:w-4/5 mx-auto shadow-lg rounded-3xl bg-neutral p-10 mb-10 sm:flex-row flex-col">
          <div className="w-48 h-auto sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image height={160} width={160} src="coding.svg" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold  text-balance tracking-tight ">
              Code Editor
            </h2>
            <ul className="list-disc list-inside">
              <li className="">
                <Link
                  href="https://code.visualstudio.com/"
                  className="font-semibold underline"
                  target="_blank"
                >
                  Visual Studio Code
                </Link>
              </li>
              <li className="">
                <span className="font-semibold">
                  Themes:{" "}
                  <span>
                    <Link
                      href="https://draculatheme.com/visual-studio-code"
                      target="_blank"
                      className="underline font-medium"
                    >
                      Dracula Official,
                    </Link>
                    <Link
                      href="https://github.com/Binaryify/OneDark-Pro"
                      target="_blank"
                      className="underline font-medium"
                    >
                      {" "}
                      One Dark Pro
                    </Link>
                  </span>
                </span>
              </li>
              <li className="">
                <span className="font-semibold">
                  Extensions:{" "}
                  <span>
                    <Link
                      href="https://prettier.io/"
                      target="_blank"
                      className="underline font-medium"
                    >
                      Prettier,
                    </Link>
                    <Link
                      href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                      target="_blank"
                      className="underline font-medium"
                    >
                      {" "}
                      Tailwind CSS IntelliSense,
                    </Link>
                    <Link
                      href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                      target="_blank"
                      className="underline font-medium"
                    >
                      {" "}
                      ES7+ React/Redux/React-Native snippets
                    </Link>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center lg:w-4/5 mx-auto shadow-lg rounded-3xl bg-neutral p-10 mb-10 sm:flex-row flex-col">
          <div className="w-48 h-auto sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image height={160} width={160} src="Typing.svg" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="mb-3 text-3xl   md:text-5xl font-semibold  text-balance tracking-tight ">
              Software
            </h2>
            <ul className="list-disc list-inside">
              <li className="font-semibold">
                Browser:{" "}
                <span className="font-medium">Google Chrome, Firefox</span>
              </li>
              <li className="font-semibold">
                Miscellaneous:{" "}
                <span className="font-medium">
                  Simple screen recorder, Auto-cpu-freq
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center lg:w-4/5 mx-auto shadow-lg rounded-3xl bg-neutral p-10 mb-10 sm:flex-row flex-col">
          <div className="w-48 h-auto sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image height={160} width={160} src="computer.svg" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="mb-3 text-3xl   md:text-5xl font-semibold  text-balance tracking-tight ">
              Hardware
            </h2>
            <ul className="list-disc list-inside">
              <li className="font-medium">Asus Vivobook 16x</li>
              <li className="font-medium">Ipad 9th gen</li>
              <li className="font-medium">Samsung Galaxy F15</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
