import React from "react";
export default function Row({serialNumber,name,title,background,status,submittedon,view_details}){
    const truncateTitle = (title) => {
      const words = title.split(" ");
      if (words.length > 1) {
        return words[0] + "...";
      }
      return title;
    };
    return (
      <>
        <tr>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div className="flex items-center">
              <div>
                <div className="text-sm leading-5 text-gray-800">
                  {serialNumber}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div className="text-sm leading-5 text-blue-900">{name}</div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
            {truncateTitle(title)}
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
            {background}
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative text-xs">{status}</span>
            </span>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
            {submittedon}
          </td>
          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
              {view_details}
            </button>
          </td>
        </tr>
      </>
    );
}