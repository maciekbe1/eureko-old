import React from "react";
import HeaderItem from "@/components/header/header-item";
import { routes } from "@/constants/header-routes";

export default function HeaderMenu() {
  return (
    <nav className="relative z-40 h-full">
      <ul>
        {routes.map(
          (item: { name: string; href: string; icon: string }, index) => (
            <HeaderItem
              name={item.name}
              href={item.href}
              key={index}
              icon={item.icon}
            />
          )
        )}
      </ul>
    </nav>
  );
}
