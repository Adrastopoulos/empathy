import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import {
  FaBars,
  FaCircleNotch,
  FaDiscourse,
  FaGithub,
  FaMapMarked,
  FaSearch,
  FaSearchLocation,
  FaUser,
  FaUserFriends,
  FaWindowClose,
} from "react-icons/fa";
import { api } from "~/utils/api";
import { Emotion } from "~/utils/types";
import { EmotionCard } from "./EmotionCard";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  const emotions = api.emotion.get.useQuery(undefined, {
    refetchInterval: 3500,
  });

  if (emotions.isLoading)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <FaCircleNotch className="animate-spin" />
      </div>
    );

  if (emotions.isError)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-xl font-extrabold tracking-tight text-white ">
          Error
        </h1>
      </div>
    );

  return (
    <>
      <Head>
        <title>Empathy Playground</title>
        <meta name="description" content="The Empathy Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="drawer-mobile drawer bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <nav className="navbar sticky top-0 z-50 w-full bg-opacity-50 backdrop-blur">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                className="swap btn-ghost swap-rotate btn-circle btn"
              >
                <input type="checkbox" />
                <FaBars className="swap-off fill-current" />
                <FaWindowClose className="swap-on fill-current" />
              </label>
            </div>
            <div className="flex flex-1 items-center gap-2 px-4 py-2 lg:hidden">
              <Link href="/" className="flex-0 btn-ghost btn px-2">
                <div className="inline-flex transition-all h-full duration-200">
                  <Image
                    src="/empathy_light.png"
                    alt="logo"
                    width={128}
                    height={128}
                    className="w-full"
                  />
                </div>
              </Link>
              <span className="link-hover link font-mono text-xs">0.0.1</span>
            </div>
            <div className="hidden w-full max-w-xs lg:flex mx-5">
              <FaSearch />
              <input className="input input-ghost" placeholder="Search..." />
            </div>
            <div className="navbar-end flex-1">
              <div className="dropdown-end dropdown">
                <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                  <div className="h-10 w-10 rounded-full">
                    <Image
                      src={"https://i.pravatar.cc/300"}
                      width={64}
                      height={64}
                      alt="profile"
                    />
                  </div>
                </label>
              </div>
              <Link
                href="https://github.com/adrastopoulos/empathy"
                className="btn-ghost btn-circle btn"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
            </div>
          </nav>
          <div className="flex flex-wrap gap-4 p-4">{children}</div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <aside className="w-80 bg-base-200 bg-opacity-80">
            <div className="sticky top-0 z-20 h-20 hidden items-center gap-2 px-4 py-2 backdrop-blur lg:flex">
              <Link href="/" className="flex-0 btn-ghost btn px-2">
                <div className="inline-flex h-full text-lg transition-all duration-200">
                  <Image
                    src="/empathy_light.png"
                    alt="logo"
                    width={128}
                    height={128}
                    className="w-full"
                  />
                </div>
              </Link>
              <span className="link-hover link font-mono text-xs">0.0.1</span>
            </div>
            <ul className="menu  p-4 text-base-content">
              <li className="menu-title">
                <span>Category</span>
              </li>
              <li>
                <Link href="/profile">
                  <FaUser />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/connections">
                  <FaUserFriends />
                  <span>Connections</span>
                </Link>
              </li>
              <li>
                <Link href="/playground">
                  <FaMapMarked />
                  <span>Playground</span>
                </Link>
              </li>
              <li />
              <li className="menu-title">
                <span>Legal</span>
              </li>
              <li>
                <Link href="/privacy">
                  <FaSearchLocation />
                  <span>Privacy</span>
                </Link>
              </li>
              <li>
                <Link href="/tos">
                  <FaDiscourse />
                  <span>TOS</span>
                </Link>
              </li>
            </ul>
            <div className="p-2 flex flex-col gap-4">
              {Emotion.map((emotion, i) => (
                <EmotionCard
                  emotion={emotion}
                  value={emotions.data.emotion[emotion]}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
