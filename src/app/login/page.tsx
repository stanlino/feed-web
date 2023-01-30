'use client'

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { BiUserCircle, BiLockAlt } from 'react-icons/bi'

export default function Login() {

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <main className="bg-dark min-h-screen flex">
      <div className="max-w-screen-xl flex flex-1 items-center mx-auto">
        <div className="flex flex-1">
          <a className="mx-auto" href="https://storyset.com/people">
            <Image
              src={'/login/hero.svg'}
              alt={'Cinco pessoas distintas conversando em uma sala. Elas estão descontraídas e confortáveis.'}
              width={500}
              height={500}
            />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-1">
          <div className="flex flex-1 flex-col max-w-md mx-auto">
            <h1 className="text-4xl text-white font-semibold">Sign in</h1>
            <div className="flex flex-col gap-2 mt-8">
              <label className="bg-darkito h-11 rounded-lg flex items-center">
                <BiUserCircle className="text-2xl mx-2 text-white" />
                <input placeholder="Username" aria-label="Username" autoComplete="off" type="text" className="border-none bg-transparent flex flex-1 outline-none text-white" />
              </label>
              <label className="bg-darkito h-11 rounded-lg flex items-center pr-2">
                <BiLockAlt className="text-2xl mx-2 text-white" />
                <input placeholder="Password" type='password' aria-label="Password" className="border-none bg-transparent flex flex-1 outline-none text-white" />
              </label>
            </div>
            <label className="my-4 select-none flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-base text-white font-normal">Remember me</span>
            </label>
            <button type="submit" className="bg-accent h-11 rounded-lg text-base font-semibold text-black hover:bg-accent-hover">
              Sign in
            </button>
            <Link href={'/signup'} className="my-4 flex justify-center">
              <span className="no-underline text-blue-500 font-medium hover:underline">{`I don't have an account`}</span>
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}