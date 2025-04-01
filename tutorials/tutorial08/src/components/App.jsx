import {Image} from 'antd';
import { TimePicker } from 'antd';
import { Calendar } from 'antd';
import { Collapse } from 'antd';
import React from "react";
import NavBar from "./NavBar";

// custom components:
export default function App() {
    const items = [
        {
          key: '1',
          label: 'The Horseshoe Crab',
          children: <p>"This creature has gone nearly untouched by evolution for over 445 million years."</p>,
        },
        {
          key: '2',
          label: 'The Sword-Billed Hummingbird',
          children: <p>"This species of hummingbird is notable as the only bird to have a beak longer than its body."</p>,
        },
        {
          key: '3',
          label: 'Quaking Aspen',
          children: <p>"Depending on how one measures, a clonal colony of Quaking Aspen may be the heaviest lifeform on Earth at ~13 millon pounds."</p>,
        },
      ];
    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Photo Gallery
                </h2>
                <div className="flex flex-wrap content-start">
     <Image
         src="https://picsum.photos/600/600?id=1"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=2"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=3"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=4"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=5"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=6"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=7"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=8"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=9"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=10"
         width={200}
     />
                </div>
                <div>
                    <TimePicker minuteStep={15} secondStep={15} hourStep={1}></TimePicker>
                    <Calendar fullscreen={false} />
                    <Collapse items={items} />
                </div>
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
