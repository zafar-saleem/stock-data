"use client";

import React from "react";
import { useAllDailyStocks } from "@/hooks/useAllDailyStocks";

export default function Home() {
  const { data, isLoading, } = useAllDailyStocks();

  return (
    <main>
      {
        isLoading
        ? <p className="flex min-h-screen items-center justify-center">Loading...</p>
        :
        <div className="flex min-h-screen items-center justify-center">
          {!data && <p>{data?.Information}</p>}
          <div className="overflow-x-auto">
            <div className="w-full max-w-xlg p-4 border rounded-lg shadow sm:p-6 w-full">
              <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl">
                {data && data["Meta Data"]["1. Information"]}
              </h5>
              <ul className="my-4 space-y-3">
                <li>
                  <a href="#" className="flex p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" width="50px" height="50px"><path d="M0 0v27.367h194.648V0H0zm222.226 0v27.367h277.383S471.276 0 433.75 0H222.226zm331.797 0v27.367h167.812L711.875 0H554.023zm288.125 0l-9.961 27.367h166.289V0H842.148zM0 53.222v27.367h194.648V53.222H0zm222.226.039V80.59h309.57s-3.615-21.063-9.922-27.329H222.226zm331.797 0V80.59h186.211l-9.219-27.329H554.023zm268.203 0l-9.219 27.329h185.469V53.261h-176.25zM55.937 106.444v27.406h84.297v-27.406H55.937zm222.227 0v27.406h84.297v-27.406h-84.297zm166.289 0v27.406h84.297s5.352-14.473 5.352-27.406h-89.649zm165.508 0v27.406h149.453l-9.961-27.406H609.961zm193.906 0l-10 27.406h150.195v-27.406H803.867zm-747.93 53.262v27.367h84.297v-27.367H55.937zm222.227 0v27.367h215.312s18.012-14.042 23.75-27.367H278.164zm331.797 0v27.367h84.297v-15.234l5.352 15.234h154.414l5.742-15.234v15.234h84.297v-27.367H785.82l-8.398 23.18-8.438-23.18H609.961zM55.937 212.928v27.367h84.297v-27.367H55.937zm222.227 0v27.367h239.062c-5.739-13.281-23.75-27.367-23.75-27.367H278.164zm331.797 0v27.367h84.297v-27.367h-84.297zm99.609 0l10.195 27.367h115.781l9.688-27.367H709.57zm150.195 0v27.367h84.297v-27.367h-84.297zM55.937 266.15v27.366h84.297V266.15H55.937zm222.227 0v27.366h84.297V266.15h-84.297zm166.289 0v27.366h89.648c0-12.915-5.352-27.366-5.352-27.366h-84.296zm165.508 0v27.366h84.297V266.15h-84.297zm118.75 0l9.883 27.366h77.617l9.961-27.366h-97.461zm131.054 0v27.366h84.297V266.15h-84.297zM1.523 319.372v27.406h194.648v-27.406H1.523zm220.703 0v27.406h299.648c6.307-6.275 9.922-27.406 9.922-27.406h-309.57zm333.321 0v27.406h138.711v-27.406H555.547zm192.343 0l10.156 27.406h39.492l9.531-27.406H747.89zm111.875 0v27.406H1000v-27.406H859.765zM1.523 372.633V400h194.648v-27.367H1.523zm220.703 0v27.328H433.75c37.526 0 65.859-27.328 65.859-27.328H222.226zm333.321 0V400h138.711v-27.367H555.547zm211.601 0l9.766 27.29 1.68.038 9.922-27.328h-21.368zm92.617 0V400H1000v-27.367H859.765z" fill="#5A87C5FF" fill-color-id="0" stroke-color-id="-1" recolor-fill="true" recolor-stroke="true"/></svg>
                  </a>
                </li>
              </ul>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-xl">
              <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Open 🔓</th>
                  <th className="py-3 px-4 text-left">High ⬆️</th>
                  <th className="py-3 px-4 text-left">Low ⬇️</th>
                  <th className="py-3 px-4 text-left">Close 🔏</th>
                  <th className="py-3 px-4 text-left">Volume 🚀</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {
                  data && Object.keys(data["Time Series (Daily)"] as any).map((key: string, index: number) => (
                    <tr className="border-b border-blue-gray-200" key={index}>
                      <td className="py-3 px-4">{key}</td>
                      <td className="py-3 px-4">{data["Time Series (Daily)"][key]["1. open"]}</td>
                      <td className="py-3 px-4">{data["Time Series (Daily)"][key]["2. high"]}</td>
                      <td className="py-3 px-4">{data["Time Series (Daily)"][key]["3. low"]}</td>
                      <td className="py-3 px-4">{data["Time Series (Daily)"][key]["4. close"]}</td>
                      <td className="py-3 px-4">{data["Time Series (Daily)"][key]["5. volume"]}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      }
    </main>
  );
}
