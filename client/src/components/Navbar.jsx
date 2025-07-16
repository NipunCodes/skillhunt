import React from "react"

export default function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
            <span class="font-bold text-3xl tracking-tight">SkillHunt</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-gray-500">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                    What's new
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                    Why SkillHunt
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500">
                    Find talent
                </a>
            </div>
            <div>
                <a href="#" class="inline-block font-semibold text-sm px-4 py-2 leading-none text-gray-700 hover:border-transparent hover:text-gray-500  mt-4 lg:mt-0">Sign In</a>
            </div>
            <div>
                <a href="#" class="inline-block font-semibold text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-gray-700 mt-4 lg:mt-0">Join</a>
            </div>
        </div>
    </nav>

  )
}
